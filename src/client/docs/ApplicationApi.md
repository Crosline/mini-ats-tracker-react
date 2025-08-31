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
|[**applicationsCreate**](#applicationscreate) | **POST** /applications/ | |
|[**applicationsDestroy**](#applicationsdestroy) | **DELETE** /applications/{id}/ | |
|[**applicationsList**](#applicationslist) | **GET** /applications/ | |
|[**applicationsPartialUpdate**](#applicationspartialupdate) | **PATCH** /applications/{id}/ | |
|[**applicationsRetrieve**](#applicationsretrieve) | **GET** /applications/{id}/ | |
|[**applicationsUpdate**](#applicationsupdate) | **PUT** /applications/{id}/ | |

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

[jwtAuth](../README.md#jwtAuth)

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

let id: string; // (default to undefined)

const { status, data } = await apiInstance.apiV1ApplicationsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

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

[jwtAuth](../README.md#jwtAuth)

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

let id: string; // (default to undefined)
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
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Application**

### Authorization

[jwtAuth](../README.md#jwtAuth)

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

let id: string; // (default to undefined)

const { status, data } = await apiInstance.apiV1ApplicationsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Application**

### Authorization

[jwtAuth](../README.md#jwtAuth)

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

let id: string; // (default to undefined)
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
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Application**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsCreate**
> Application applicationsCreate(applicationRequest)


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

const { status, data } = await apiInstance.applicationsCreate(
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

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsDestroy**
> applicationsDestroy()


### Example

```typescript
import {
    ApplicationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.applicationsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsList**
> Array<Application> applicationsList()


### Example

```typescript
import {
    ApplicationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationApi(configuration);

const { status, data } = await apiInstance.applicationsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Application>**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsPartialUpdate**
> Application applicationsPartialUpdate()


### Example

```typescript
import {
    ApplicationApi,
    Configuration,
    PatchedApplicationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationApi(configuration);

let id: string; // (default to undefined)
let patchedApplicationRequest: PatchedApplicationRequest; // (optional)

const { status, data } = await apiInstance.applicationsPartialUpdate(
    id,
    patchedApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedApplicationRequest** | **PatchedApplicationRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Application**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsRetrieve**
> Application applicationsRetrieve()


### Example

```typescript
import {
    ApplicationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.applicationsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Application**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsUpdate**
> Application applicationsUpdate(applicationRequest)


### Example

```typescript
import {
    ApplicationApi,
    Configuration,
    ApplicationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationApi(configuration);

let id: string; // (default to undefined)
let applicationRequest: ApplicationRequest; //

const { status, data } = await apiInstance.applicationsUpdate(
    id,
    applicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationRequest** | **ApplicationRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Application**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

