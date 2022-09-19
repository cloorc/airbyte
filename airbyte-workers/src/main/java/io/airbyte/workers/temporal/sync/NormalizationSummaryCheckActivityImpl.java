/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.workers.temporal.sync;

import io.airbyte.scheduler.models.AttemptNormalizationStatus;
import io.airbyte.scheduler.persistence.JobPersistence;
import java.io.IOException;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;
import javax.inject.Inject;
import javax.inject.Singleton;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Singleton
@AllArgsConstructor
@NoArgsConstructor
@Slf4j
public class NormalizationSummaryCheckActivityImpl implements NormalizationSummaryCheckActivity {

  @Inject
  private JobPersistence jobPersistence;

  @Override
  public Boolean shouldRunNormalization(final Long jobId, final Long attemptNumber) throws IOException {

    final List<AttemptNormalizationStatus> attemptNormalizationStatuses = jobPersistence.getAttemptNormalizationStatusesForJob(jobId);
    final AttemptNormalizationStatus currentAttemptNormalizationStatus =
        attemptNormalizationStatuses.stream().filter(a -> a.getAttemptNumber() == attemptNumber).toList().get(0);
    final Optional<Long> currentCommittedRecordCount = currentAttemptNormalizationStatus.getRecordsCommitted();

    // if the count of committed records for this attempt is > 0 OR if it is null,
    // then we should run normalization

    if (currentCommittedRecordCount.get() == null || currentCommittedRecordCount.get() > 0) {
      return true;
    }

    final AtomicReference<Long> totalRecordsCommitted = new AtomicReference<>(0L);
    final AtomicReference<Boolean> shouldReturnTrue = new AtomicReference<>(false);

    attemptNormalizationStatuses.stream().sorted(Comparator.comparing(AttemptNormalizationStatus::getAttemptNumber).reversed()).toList()
        .forEach(n -> {
          if (n.getAttemptNumber() == attemptNumber) {
            return;
          }

          // if normalization succeeded, we can stop looking
          if (!n.getNormalizationFailed()) {
            return;
          }

          // if normalization failed on past attempt,
          // add number of records committed on that attempt to
          // total committed number
          if (n.getNormalizationFailed()) {
            if (n.getRecordsCommitted().get() == null) {
              shouldReturnTrue.set(true);
              return;
            } else if (n.getRecordsCommitted().get() != 0L) {
              totalRecordsCommitted.set(totalRecordsCommitted.get() + n.getRecordsCommitted().get());
            }
          }
        });

    if (shouldReturnTrue.get() || totalRecordsCommitted.get() > 0L) {
      return true;
    }

    return false;

  }

}
