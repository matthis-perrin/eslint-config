import {ProjectType, WorkspaceName} from '@src/models';
import {WorkspaceProject} from '@src/project/generate_workspace';
import {generateCloudfrontDistributionTerraform} from '@src/project/terraform/cloudfront';
import {generateLambdaTerraform} from '@src/project/terraform/lambda';
import {generateAwsProviderTerraform} from '@src/project/terraform/provider';
import {generateS3BucketTerraform} from '@src/project/terraform/s3';
import {neverHappens} from '@src/type_utils';

export function generateCommonTerraform(
  workspaceName: WorkspaceName,
  projects: WorkspaceProject[]
): string {
  return [
    generateAwsProviderTerraform(workspaceName),
    generateS3BucketTerraform(
      workspaceName,
      projects.filter(p => p.type === ProjectType.Web).map(p => p.projectName)
    ),
  ].join('\n\n');
}

export function generateWorkspaceProjectTerraform(
  workspaceName: WorkspaceName,
  project: WorkspaceProject
): string | undefined {
  const {projectName, type, fromFragment} = project;
  const cloudwatchTriggerMinutes =
    'cloudwatchTriggerMinutes' in fromFragment ? fromFragment.cloudwatchTriggerMinutes : undefined;
  const alarmEmail = 'alarmEmail' in fromFragment ? fromFragment.alarmEmail : undefined;
  if (type === ProjectType.Web) {
    return generateCloudfrontDistributionTerraform(workspaceName, projectName);
  } else if (type === ProjectType.LambdaFunction) {
    return generateLambdaTerraform(workspaceName, projectName, {
      api: false,
      web: false,
      alarmEmail,
      cloudwatchTriggerMinutes,
    });
  } else if (type === ProjectType.LambdaApi) {
    return generateLambdaTerraform(workspaceName, projectName, {
      api: true,
      web: false,
      alarmEmail,
      cloudwatchTriggerMinutes,
    });
  } else if (type === ProjectType.LambdaWebApi) {
    return generateLambdaTerraform(workspaceName, projectName, {
      api: true,
      web: true,
      alarmEmail,
      cloudwatchTriggerMinutes,
    });
  } else if (type === ProjectType.NodeScript) {
    return undefined;
  } else if (type === ProjectType.SharedNode) {
    return undefined;
  } else if (type === ProjectType.SharedWeb) {
    return undefined;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  } else if (type === ProjectType.Shared) {
    return undefined;
  }
  neverHappens(type, 'ProjectType');
}

export function generateDummyTerraformCredentials(): string {
  return `
[default]
aws_access_key_id=
aws_secret_access_key=
`.trim();
}
