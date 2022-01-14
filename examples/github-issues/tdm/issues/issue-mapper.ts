import { Issue } from "../schemas/issue"
import { Mapper, Property } from "tdm/mapper"

export class IssueMapper extends Mapper<Issue> {
  fields = {
    id: Property.Identifier,
    title: Property.Comparator,
    state: Property.Field,
    labels: Property.Field,
    body: Property.Field,
    assignee: Property.Ignored,
    milestone: Property.Ignored,
    node_id: Property.Ignored,
    url: Property.Ignored,
    repository: Property.Ignored,
    labels_url: Property.Ignored,
    comments_url: Property.Ignored,
    events_url: Property.Ignored,
    html_url: Property.Ignored,
    number: Property.Ignored,
    user: Property.Ignored,
    assignees: Property.Ignored,
    locked: Property.Ignored,
    active_lock_reason: Property.Ignored,
    comments: Property.Ignored,
    pull_request: Property.Ignored,
    closed_at: Property.Ignored,
    created_at: Property.Ignored,
    updated_at: Property.Ignored,
    draft: Property.Ignored,
    closed_by: Property.Ignored,
    body_html: Property.Ignored,
    body_text: Property.Ignored,
    timeline_url: Property.Ignored,
    repository_url: Property.Ignored,
    performed_via_github_app: Property.Ignored,
    author_association: Property.Ignored,
    reactions: Property.Ignored,
  } as const
}
