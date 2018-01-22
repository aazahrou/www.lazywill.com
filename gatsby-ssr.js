import React from "react";

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  return setPostBodyComponents([
    <script
      key={`webfontsloader`}
      src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
    />,
    <script
      key={`webfontsloader-setup`}
      dangerouslySetInnerHTML={{
        __html: ` 
        WebFontConfig = {
          google: {
      families: ["Open Sans:300,400"]
    }
   };

   (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
   })(document);


`
      }}
    />
  ]);
};
