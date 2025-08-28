# ApplicantApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1ApplicantsCreate**](#apiv1applicantscreate) | **POST** /api/v1/applicants/ | |
|[**apiV1ApplicantsDestroy**](#apiv1applicantsdestroy) | **DELETE** /api/v1/applicants/{id}/ | |
|[**apiV1ApplicantsList**](#apiv1applicantslist) | **GET** /api/v1/applicants/ | |
|[**apiV1ApplicantsPartialUpdate**](#apiv1applicantspartialupdate) | **PATCH** /api/v1/applicants/{id}/ | |
|[**apiV1ApplicantsRetrieve**](#apiv1applicantsretrieve) | **GET** /api/v1/applicants/{id}/ | |
|[**apiV1ApplicantsUpdate**](#apiv1applicantsupdate) | **PUT** /api/v1/applicants/{id}/ | |

# **apiV1ApplicantsCreate**
> Applicant apiV1ApplicantsCreate(applicantRequest)


### Example

```typescript
import {
    ApplicantApi,
    Configuration,
    ApplicantRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicantApi(configuration);

let applicantRequest: ApplicantRequest; //

const { status, data } = await apiInstance.apiV1ApplicantsCreate(
    applicantRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantRequest** | **ApplicantRequest**|  | |


### Return type

**Applicant**

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

# **apiV1ApplicantsDestroy**
> apiV1ApplicantsDestroy()


### Example

```typescript
import {
    ApplicantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicantApi(configuration);

let id: number; //A unique integer value identifying this applicant. (default to undefined)

const { status, data } = await apiInstance.apiV1ApplicantsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this applicant. | defaults to undefined|


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

# **apiV1ApplicantsList**
> Array<Applicant> apiV1ApplicantsList()


### Example

```typescript
import {
    ApplicantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicantApi(configuration);

const { status, data } = await apiInstance.apiV1ApplicantsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Applicant>**

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

# **apiV1ApplicantsPartialUpdate**
> Applicant apiV1ApplicantsPartialUpdate()


### Example

```typescript
import {
    ApplicantApi,
    Configuration,
    PatchedApplicantRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicantApi(configuration);

let id: number; //A unique integer value identifying this applicant. (default to undefined)
let patchedApplicantRequest: PatchedApplicantRequest; // (optional)

const { status, data } = await apiInstance.apiV1ApplicantsPartialUpdate(
    id,
    patchedApplicantRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedApplicantRequest** | **PatchedApplicantRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this applicant. | defaults to undefined|


### Return type

**Applicant**

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

# **apiV1ApplicantsRetrieve**
> Applicant apiV1ApplicantsRetrieve()


### Example

```typescript
import {
    ApplicantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicantApi(configuration);

let id: number; //A unique integer value identifying this applicant. (default to undefined)

const { status, data } = await apiInstance.apiV1ApplicantsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this applicant. | defaults to undefined|


### Return type

**Applicant**

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

# **apiV1ApplicantsUpdate**
> Applicant apiV1ApplicantsUpdate(applicantRequest)


### Example

```typescript
import {
    ApplicantApi,
    Configuration,
    ApplicantRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicantApi(configuration);

let id: number; //A unique integer value identifying this applicant. (default to undefined)
let applicantRequest: ApplicantRequest; //

const { status, data } = await apiInstance.apiV1ApplicantsUpdate(
    id,
    applicantRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantRequest** | **ApplicantRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this applicant. | defaults to undefined|


### Return type

**Applicant**

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

