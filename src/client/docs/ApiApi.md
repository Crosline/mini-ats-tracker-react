# ApiApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1LoginCreate**](#apiv1logincreate) | **POST** /api/v1/login/ | |
|[**apiV1LoginRefreshCreate**](#apiv1loginrefreshcreate) | **POST** /api/v1/login/refresh/ | |

# **apiV1LoginCreate**
> TokenObtainPair apiV1LoginCreate(tokenObtainPairRequest)

Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.

### Example

```typescript
import {
    ApiApi,
    Configuration,
    TokenObtainPairRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ApiApi(configuration);

let tokenObtainPairRequest: TokenObtainPairRequest; //

const { status, data } = await apiInstance.apiV1LoginCreate(
    tokenObtainPairRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tokenObtainPairRequest** | **TokenObtainPairRequest**|  | |


### Return type

**TokenObtainPair**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1LoginRefreshCreate**
> TokenRefresh apiV1LoginRefreshCreate(tokenRefreshRequest)

Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

### Example

```typescript
import {
    ApiApi,
    Configuration,
    TokenRefreshRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ApiApi(configuration);

let tokenRefreshRequest: TokenRefreshRequest; //

const { status, data } = await apiInstance.apiV1LoginRefreshCreate(
    tokenRefreshRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tokenRefreshRequest** | **TokenRefreshRequest**|  | |


### Return type

**TokenRefresh**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

