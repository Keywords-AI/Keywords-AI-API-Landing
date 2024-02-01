
# Deployment process

- make sure the latest code is in test branch
- `git push origin test`
- wait for the action to finish and go to [https://test.keywordsai.co/](https://test.keywordsai.co/) see if the changes is correct
- `git checkout production`
- `git rebase origin/test`
- `git push origin production`
- go to [https://keywordsai.co/](https://keywordsai.co/) check the result
