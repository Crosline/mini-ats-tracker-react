# ApplicationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1ApplicationsCreate**](#apiv1applicationscreate) | **POST** /api/v1/applications/ | |
|[**apiV1ApplicationsDestroy**](#apiv1applicationsdestroy) | **DELETE** /api/v1/applications/{id}/ | |
|[**apiV1ApplicationsList**](#apiv1applicationslist) | **GET** /api/v1/applications/ | |
|[**apiV1ApplicationsPartialUpdate**](#apiv1applicationspartialupdate) | **PATCH** /api/v1/applications/{id}/ | |
|[**apiV1ApplicationsRetrieve**](#apiv1applicationsretrieve) | **GET** /api/v1/applications/{id}/ | |
|[**apiV1ApplicationsUpdate**](#apiv1applicationsupdate) | **PUT** /api/v1/applications/{id}/ | |

# **apiV1ApplicationsCreate**
> Application apiV1ApplicationsCreate(applicationRequest)


### Example

```typescript
import {
    ApplicationApi,
    Configuration,
    ApplicationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationApi(configuration);

let applicationRequest: ApplicationRequest; //

const { status, data } = await apiInstance.apiV1ApplicationsCreate(
    applicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationRequest** | **ApplicationRequest**|  | |


### Return type

**Application**

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

# **apiV1ApplicationsDestroy**
> apiV1ApplicationsDestroy()


### Example

```typescript
import {
    ApplicationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationApi(configuration);

let id: number; //A unique integer value identifying this application. (default to undefined)

const { status, data } = await apiInstance.apiV1ApplicationsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this application. | defaults to undefined|


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

# **apiV1ApplicationsList**
> Array<Application> apiV1ApplicationsList()


### Example

```typescript
import {
    ApplicationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationApi(configuration);

const { status, data } = await apiInstance.apiV1ApplicationsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Application>**

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

# **apiV1ApplicationsPartialUpdate**
> Application apiV1ApplicationsPartialUpdate()


### Example

```typescript
import {
    ApplicationApi,
    Configuration,
    PatchedApplicationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationApi(configuration);

let id: number; //A unique integer value identifying this application. (default to undefined)
let patchedApplicationRequest: PatchedApplicationRequest; // (optional)

const { status, data } = await apiInstance.apiV1ApplicationsPartialUpdate(
    id,
    patchedApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedApplicationRequest** | **PatchedApplicationRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this application. | defaults to undefined|


### Return type

**Application**

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

# **apiV1ApplicationsRetrieve**
> Application apiV1ApplicationsRetrieve()


### Example

```typescript
import {
    ApplicationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationApi(configuration);

let id: number; //A unique integer value identifying this application. (default to undefined)

const { status, data } = await apiInstance.apiV1ApplicationsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this application. | defaults to undefined|


### Return type

**Application**

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

# **apiV1ApplicationsUpdate**
> Application apiV1ApplicationsUpdate(applicationRequest)


### Example

```typescript
import {
    ApplicationApi,
    Configuration,
    ApplicationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationApi(configuration);

let id: number; //A unique integer value identifying this application. (default to undefined)
let applicationRequest: ApplicationRequest; //

const { status, data } = await apiInstance.apiV1ApplicationsUpdate(
    id,
    applicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationRequest** | **ApplicationRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this application. | defaults to undefined|


### Return type

**Application**

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

