import { client } from "octonode"; // eslint-disable-line import/extensions
import {
  success,
  failure,
  githubSuccessPayload,
  githubFailurePayload,
} from "./libs/response-lib";
import {
  isAValidPullRequest,
  eventIsAPullRequest,
  updatePullRequestStatus,
} from "./libs/github-service";

/* eslint-disable import/prefer-default-export */
export const handleRequest = async function (request) {
  const githubClient = client(process.env.GITHUB_TOKEN);

  // Create new TextDecoder instance
  const decoder = new TextDecoder();

  const body = JSON.parse(decoder.decode(request.body));

  if (!eventIsAPullRequest(body)) return success("Event is not a Pull Request");
  const payload = isAValidPullRequest(body)
    ? githubSuccessPayload()
    : githubFailurePayload();
  try {
    await updatePullRequestStatus(
      githubClient,
      payload,
      body.repository,
      body.pull_request
    );
    return success(`Process finished with state: ${payload.state}`);
  } catch (e) {
    return failure("Process finished with error");
  }
};
