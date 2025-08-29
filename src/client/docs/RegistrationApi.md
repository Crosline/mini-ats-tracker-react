# RegistrationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1RegisterCreate**](#apiv1registercreate) | **POST** /api/v1/register/ | |

# **apiV1RegisterCreate**
> UserRegistration apiV1RegisterCreate(userRegistrationRequest)


### Example

```typescript
import {
    RegistrationApi,
    Configuration,
    UserRegistrationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RegistrationApi(configuration);

let userRegistrationRequest: UserRegistrationRequest; //

const { status, data } = await apiInstance.apiV1RegisterCreate(
    userRegistrationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userRegistrationRequest** | **UserRegistrationRequest**|  | |


### Return type

**UserRegistration**

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

