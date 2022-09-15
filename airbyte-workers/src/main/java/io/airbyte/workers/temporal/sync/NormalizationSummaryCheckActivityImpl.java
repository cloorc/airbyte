/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.workers.temporal.sync;

import io.airbyte.config.NormalizationSummary;
import io.airbyte.config.SyncStats;
import io.airbyte.scheduler.models.Attempt;
import io.airbyte.scheduler.models.Job;
import io.airbyte.scheduler.persistence.JobPersistence;
import java.io.IOException;
import java.util.Comparator;
import java.util.List;
import javax.inject.Inject;
import javax.inject.Singleton;
import lombok.extern.slf4j.Slf4j;

@Singleton
@Slf4j
public class NormalizationSummaryCheckActivityImpl implements NormalizationSummaryCheckActivity {

  @Inject
  private JobPersistence jobPersistence;

  @Override
  public Boolean shouldRunNormalization(final Long jobId, final Long attemptId) throws IOException {
    // if the count of committed records for this attempt is > 0 OR if it is null,
    // then we should run normalization
    final SyncStats syncStats = jobPersistence.getSyncStats(attemptId).get(0);
    if (syncStats.getRecordsCommitted() == null || syncStats.getRecordsCommitted() > 0) {
      return true;
    }

    // if the count of committed records == 0, then
    // get each attempt related to this job
    // for each one, check if there is a successful normalization

    final Job job = jobPersistence.getJob(jobId);
    final List<Attempt> attempts = job.getAttempts();

    // Attempt.getid() returns the attempt number for a particular job
    // Attempts are sorted in descending order of attempt number. The current attempt is the first
    // element of this list.
    // Check all previous attempts for successful normalization.
    final List<Attempt> sortedAttempts = attempts.stream().sorted(Comparator.comparing(Attempt::getId).reversed()).toList();
    sortedAttempts.forEach(attempt -> {
      // Attempt object id is its attempt number
      log.info("attempt id of sorted attempts list is: " + attempt.getId());
      attempt.getId();
    });

    try {
      final NormalizationSummary normalizationSummary = jobPersistence.getNormalizationSummary(attemptId).get(0);
      final Boolean shouldRun = normalizationSummary != null && normalizationSummary.getFailures() == null;
      log.info("should run is: " + shouldRun);
      return true;
    } catch (final IOException e) {
      log.error("IOException reading from normalization_summaries for attempt id " + attemptId, e);
      return true;
    }
  }

}
