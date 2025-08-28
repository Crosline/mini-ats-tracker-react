# Application


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**applicant** | [**Applicant**](Applicant.md) |  | [readonly] [default to undefined]
**job** | [**JobPosting**](JobPosting.md) |  | [readonly] [default to undefined]
**status** | [**StatusEnum**](StatusEnum.md) |  | [optional] [default to undefined]
**notes** | **string** |  | [default to undefined]
**applied_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { Application } from './api';

const instance: Application = {
    id,
    applicant,
    job,
    status,
    notes,
    applied_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
