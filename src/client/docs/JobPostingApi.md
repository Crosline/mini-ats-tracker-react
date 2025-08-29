# JobPostingApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1JobsCreate**](#apiv1jobscreate) | **POST** /api/v1/jobs/ | |
|[**apiV1JobsDestroy**](#apiv1jobsdestroy) | **DELETE** /api/v1/jobs/{id}/ | |
|[**apiV1JobsList**](#apiv1jobslist) | **GET** /api/v1/jobs/ | |
|[**apiV1JobsPartialUpdate**](#apiv1jobspartialupdate) | **PATCH** /api/v1/jobs/{id}/ | |
|[**apiV1JobsRetrieve**](#apiv1jobsretrieve) | **GET** /api/v1/jobs/{id}/ | |
|[**apiV1JobsUpdate**](#apiv1jobsupdate) | **PUT** /api/v1/jobs/{id}/ | |
|[**jobsCreate**](#jobscreate) | **POST** /jobs/ | |
|[**jobsDestroy**](#jobsdestroy) | **DELETE** /jobs/{id}/ | |
|[**jobsList**](#jobslist) | **GET** /jobs/ | |
|[**jobsPartialUpdate**](#jobspartialupdate) | **PATCH** /jobs/{id}/ | |
|[**jobsRetrieve**](#jobsretrieve) | **GET** /jobs/{id}/ | |
|[**jobsUpdate**](#jobsupdate) | **PUT** /jobs/{id}/ | |

# **apiV1JobsCreate**
> JobPosting apiV1JobsCreate(jobPostingRequest)


### Example

```typescript
import {
    JobPostingApi,
    Configuration,
    JobPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new JobPostingApi(configuration);

let jobPostingRequest: JobPostingRequest; //

const { status, data } = await apiInstance.apiV1JobsCreate(
    jobPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jobPostingRequest** | **JobPostingRequest**|  | |


### Return type

**JobPosting**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1JobsDestroy**
> apiV1JobsDestroy()


### Example

```typescript
import {
    JobPostingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JobPostingApi(configuration);

let id: number; //A unique integer value identifying this job posting. (default to undefined)

const { status, data } = await apiInstance.apiV1JobsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this job posting. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1JobsList**
> Array<JobPosting> apiV1JobsList()


### Example

```typescript
import {
    JobPostingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JobPostingApi(configuration);

const { status, data } = await apiInstance.apiV1JobsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<JobPosting>**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1JobsPartialUpdate**
> JobPosting apiV1JobsPartialUpdate()


### Example

```typescript
import {
    JobPostingApi,
    Configuration,
    PatchedJobPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new JobPostingApi(configuration);

let id: number; //A unique integer value identifying this job posting. (default to undefined)
let patchedJobPostingRequest: PatchedJobPostingRequest; // (optional)

const { status, data } = await apiInstance.apiV1JobsPartialUpdate(
    id,
    patchedJobPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedJobPostingRequest** | **PatchedJobPostingRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this job posting. | defaults to undefined|


### Return type

**JobPosting**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1JobsRetrieve**
> JobPosting apiV1JobsRetrieve()


### Example

```typescript
import {
    JobPostingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JobPostingApi(configuration);

let id: number; //A unique integer value identifying this job posting. (default to undefined)

const { status, data } = await apiInstance.apiV1JobsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this job posting. | defaults to undefined|


### Return type

**JobPosting**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1JobsUpdate**
> JobPosting apiV1JobsUpdate(jobPostingRequest)


### Example

```typescript
import {
    JobPostingApi,
    Configuration,
    JobPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new JobPostingApi(configuration);

let id: number; //A unique integer value identifying this job posting. (default to undefined)
let jobPostingRequest: JobPostingRequest; //

const { status, data } = await apiInstance.apiV1JobsUpdate(
    id,
    jobPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jobPostingRequest** | **JobPostingRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this job posting. | defaults to undefined|


### Return type

**JobPosting**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobsCreate**
> JobPosting jobsCreate(jobPostingRequest)


### Example

```typescript
import {
    JobPostingApi,
    Configuration,
    JobPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new JobPostingApi(configuration);

let jobPostingRequest: JobPostingRequest; //

const { status, data } = await apiInstance.jobsCreate(
    jobPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jobPostingRequest** | **JobPostingRequest**|  | |


### Return type

**JobPosting**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobsDestroy**
> jobsDestroy()


### Example

```typescript
import {
    JobPostingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JobPostingApi(configuration);

let id: number; //A unique integer value identifying this job posting. (default to undefined)

const { status, data } = await apiInstance.jobsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this job posting. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobsList**
> Array<JobPosting> jobsList()


### Example

```typescript
import {
    JobPostingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JobPostingApi(configuration);

const { status, data } = await apiInstance.jobsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<JobPosting>**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobsPartialUpdate**
> JobPosting jobsPartialUpdate()


### Example

```typescript
import {
    JobPostingApi,
    Configuration,
    PatchedJobPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new JobPostingApi(configuration);

let id: number; //A unique integer value identifying this job posting. (default to undefined)
let patchedJobPostingRequest: PatchedJobPostingRequest; // (optional)

const { status, data } = await apiInstance.jobsPartialUpdate(
    id,
    patchedJobPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedJobPostingRequest** | **PatchedJobPostingRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this job posting. | defaults to undefined|


### Return type

**JobPosting**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobsRetrieve**
> JobPosting jobsRetrieve()


### Example

```typescript
import {
    JobPostingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JobPostingApi(configuration);

let id: number; //A unique integer value identifying this job posting. (default to undefined)

const { status, data } = await apiInstance.jobsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this job posting. | defaults to undefined|


### Return type

**JobPosting**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobsUpdate**
> JobPosting jobsUpdate(jobPostingRequest)


### Example

```typescript
import {
    JobPostingApi,
    Configuration,
    JobPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new JobPostingApi(configuration);

let id: number; //A unique integer value identifying this job posting. (default to undefined)
let jobPostingRequest: JobPostingRequest; //

const { status, data } = await apiInstance.jobsUpdate(
    id,
    jobPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jobPostingRequest** | **JobPostingRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this job posting. | defaults to undefined|


### Return type

**JobPosting**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

