export interface Actor {
  avatarUrl: string;
  login: string;
}

export interface Milestone {
  id: string;
  title: string;
}

export interface PullRequest {
  id: string;
  title: string;
  author: Actor;
  bodyHTML: string;
  bodyText: string;
  closed: boolean;
  createdAt: string;
  closedAt: string;
  mergedAt: string;
  deletions: number;
  additions: number;
  merged: boolean;
  milestone: Milestone;
  comments: { totalCount: number };
  commits: { totalCount: number };
}
