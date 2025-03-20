// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    readonly login: string | null;
    readonly id: string | null;
    // readonly node_id: string | null;
    readonly avatar_url: string | null;
    // readonly gravatar_id: string | null;
    // readonly url: string | null;
    // readonly html_url: string | null;
    // readonly followers_url: string | null;
    // readonly following_url: string | null;
    // readonly gits_url: string | null;
    // readonly starred_url: string | null;
    // readonly subscriptions_url: string | null;
    // readonly organizations_url: string | null;
    // readonly repos_url: string | null;
    // readonly events_url: string | null;
    // readonly received_events_url: string | null;
    // readonly type: string | null;
    // readonly user_view_type: string | null;
    // readonly site_admin: string | null; 
    // readonly name: string | null;
    readonly company: string | null;
    // readonly blog: string | null;
    readonly location: string | null;
    readonly email: string | null;
    // readonly hireable: string | null;
    readonly bio: string | null;
    // readonly twitter_username: string | null;
    // readonly public_repos: string | null; 
    // readonly public_gists: string | null;
    // readonly followers: string | null;
    // readonly following: string | null;
    // readonly created_at: string | null;
    // readonly updated_at: string | null; 
  }

// export default interface Candidate {
//     login: string;
//     id: number;
//     node_id: string;
//     avatar_url: string;
//     gravatar_id: string;
//     url: string;
//     html_url: string;
//     followers_url: string;
//     following_url: string;
//     gists_url: string;
//     starred_url: string;
//     subscriptions_url: string;
//     organizations_url: string;
//     repos_url: string;
//     events_url: string;
//     received_events_url: string;
//     type: string; // e.g. "User"
//     user_view_type: string; // e.g. "public"
//     site_admin: boolean;
//   }
