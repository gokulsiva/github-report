import _ from 'lodash';

import {GitHubApiService} from './GitHubApiService';
import { User } from './User';
import { Repo } from './Repo';

let args = process.argv;
if(args.length < 3) {
    console.log('Please provide user name as argument.');
} else {
    let userName = args[2];
    let service = new GitHubApiService();
    service.getUserInfo(userName, (user: User) => {
        service.getRepos(userName, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.updatedAt]);
            let reversedRepos = _.reverse(sortedRepos);
            let latestRepos = _.take(reversedRepos, 5);
            user.repos = latestRepos;
            console.log(user);
        });
    });
}