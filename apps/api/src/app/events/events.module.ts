import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { EventsPerformanceService, StorageHelperService } from '@novu/application-generic';

import { EventsController } from './events.controller';
import { EventsDistributedLockService } from './services/distributed-lock-service';
import { TriggerHandlerQueueService } from './services/workflow-queue/trigger-handler-queue.service';
import { WorkflowQueueProducerService } from './services/workflow-queue/workflow-queue-producer.service';
import { USE_CASES } from './usecases';

import { SharedModule } from '../shared/shared.module';
import { WidgetsModule } from '../widgets/widgets.module';
import { AuthModule } from '../auth/auth.module';
import { SubscribersModule } from '../subscribers/subscribers.module';
import { LogsModule } from '../logs/logs.module';
import { ContentTemplatesModule } from '../content-templates/content-templates.module';
import { IntegrationModule } from '../integrations/integrations.module';
import { ExecutionDetailsModule } from '../execution-details/execution-details.module';
import { TopicsModule } from '../topics/topics.module';
import { LayoutsModule } from '../layouts/layouts.module';

@Module({
  imports: [
    SharedModule,
    TerminusModule,
    WidgetsModule,
    AuthModule,
    SubscribersModule,
    LogsModule,
    ContentTemplatesModule,
    IntegrationModule,
    ExecutionDetailsModule,
    TopicsModule,
    LayoutsModule,
  ],
  controllers: [EventsController],
  providers: [
    ...USE_CASES,
    WorkflowQueueProducerService,
    StorageHelperService,
    TriggerHandlerQueueService,
    EventsDistributedLockService,
    EventsPerformanceService,
  ],
})
export class EventsModule {}
