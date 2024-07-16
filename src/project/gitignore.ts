export function generateGitIgnore(): string {
  return `
.DS_Store
node_modules
build
dist
tmp
yarn-error.log
.yarn-warnings.log
yarn.lock
terraform/.terraform
terraform/.terraform*
terraform/*.tfstate.backup
terraform/archives
*/log
/shared/src/env.ts
/.build.lock
    `.trim();
}
