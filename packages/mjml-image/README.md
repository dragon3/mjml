## mjml-image

Displays a responsive image in your email. It is similar to the HTML `<img />` tag.
Note that if no width is provided, the image will use the parent column width.

```xml
<mjml>
  <mj-body>
    <mj-container>
      <mj-section>
        <mj-column>
          <mj-image width="300" src="http://www.online-image-editor.com//styles/2014/images/example_image.png" />
        </mj-column>
      </mj-section>
    </mj-container>
  </mj-body>
</mjml>
```

<p align="center">
  <a href="https://mjml.io/try-it-live/component/image">
    <img width="100px" src="http://imgh.us/TRYITLIVE.svg" alt="sexy" />
  </a>
</p>


attribute                     | unit          | description                    | default value
------------------------------|---------------|--------------------------------|-----------------------------
padding                       | px            | supports up to 4 parameters    | 10px 25px
padding-top                   | px            | top offset                     | n/a
padding-bottom                | px            | bottom offset                  | n/a
padding-left                  | px            | left offset                    | n/a
padding-right                 | px            | right offset                   | n/a
container-background-color    | color         | inner element background color | n/a
border                        | string        | css border definition          | none
width                         | px            | image width                    | 100%
height                        | px            | image height                   | auto
src                           | url           | image source                   | n/a
href                          | url           | link to redirect to on click   | n/a
alt                           | string        | image description              | n/a
align                         | position      | image alignment                | center
