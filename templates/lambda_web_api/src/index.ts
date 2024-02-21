import {
  __BACKEND_NAME_UPPERCASE___URL,
  __FRONTEND_NAME_UPPERCASE___CLOUDFRONT_DOMAIN_NAME,
  __PROJECT_NAME_UPPERCASE___ROLE_ARN,
} from '@shared/env';

import {enforceCloudfrontOrigin} from '@shared-node/api/api_cloudfront_origin';
import {
  apiResponseToLambdaResonse,
  LambdaEvent,
  lambdaEventToApiRequest,
  LambdaResponse,
} from '@shared-node/api/api_lambda';
import {handleApi} from '@shared-node/api/api_router';
import {getIndex, handleStatics} from '@shared-node/api/api_statics';
import {registerAwsRole} from '@shared-node/aws/credentials';

import {loginHandler} from '@src/handlers/login_handler';
import {session} from '@src/session';

registerAwsRole(__PROJECT_NAME_UPPERCASE___ROLE_ARN);

const frontendName = '__FRONTEND_NAME__';
const frontendDomain = __FRONTEND_NAME_UPPERCASE___CLOUDFRONT_DOMAIN_NAME;
const websiteUrl = __BACKEND_NAME_UPPERCASE___URL;

export async function handler(event: LambdaEvent): Promise<LambdaResponse> {
  enforceCloudfrontOrigin(event);
  const req = lambdaEventToApiRequest(event);
  const res = apiResponseToLambdaResonse({req, frontendDomain});

  // For CORS
  if (req.method === 'OPTIONS') {
    return res({});
  }

  // Static resources
  const staticsRes = await handleStatics(req, {
    frontendName,
    websiteUrl,
    session,
  });
  if (staticsRes) {
    return res(staticsRes);
  }

  // API handlers
  const apiRes = await handleApi(req, '__PROJECT_NAME__', {
    'POST /login': loginHandler,
  });
  if (apiRes) {
    return res(apiRes);
  }

  // Default to the index
  const indexRes = await getIndex(req, {frontendName, session});
  return res(indexRes);
}
