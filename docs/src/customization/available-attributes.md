# Available Attributes

The base `CdnPicture` class uses the following props:

| Name | Description | Type | Default | Required |
|---|---|---|---|---|
| width | Width of the image | Number | None | True |
| height | Height of the image | Number | None | True |
| alt | Alternative text | String | "" | False |
| imageHandle | Image handle to be passed to image url function | String | None | True |
| imageUrlFunction | Function used to generate a CDN url | (imageHandle: String, format: String, width: Number, height: Number, fitMode: String) -> String | None | True |
| fitMode | Transformation applied to image (contain or crop) | String | "contain" | False |
| sizes | HiDPI sizes to use | [Number] | [1, 2] | False |
| classes | CSS Classes to apply to the image | String | "" | False |

`GraphCmsCdnPicture` and `ContentfulCdnPicture` provide default implementation for the `imageUrlFunction` prop, while leaving remaining props for the developer to provide.
