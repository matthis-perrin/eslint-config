export function generateGitIgnore(): string {
  return `
.DS_Store
node_modules
build
dist
tmp
yarn-error.log
yarn.lock
terraform/.terraform
terraform/.terraform*
terraform/*.tfstate.backup
terraform/.aws-credentials
terraform/archives
*/log
    `.trim();
}
