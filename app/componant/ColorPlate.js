import React from 'react'

export default function ColorPlate() {
  return (
<div className="color-palate">
  <div className="color-trigger">
    <i className="fa fa-gear" />
  </div>
  <div className="color-palate-head">
    <h6>Choose Your Color</h6>
  </div>
  <div className="various-color clearfix">
    <div className="colors-list">
      <span
        className="palate default-color active"
        data-theme-file="css/color-themes/default-theme.css"
      />
      <span
        className="palate teal-color"
        data-theme-file="css/color-themes/teal-theme.css"
      />
      <span
        className="palate pink-color"
        data-theme-file="css/color-themes/pink-theme.css"
      />
      <span
        className="palate navy-color"
        data-theme-file="css/color-themes/navy-theme.css"
      />
      <span
        className="palate blue-color"
        data-theme-file="css/color-themes/blue-theme.css"
      />
      <span
        className="palate orange-color"
        data-theme-file="css/color-themes/orange-theme.css"
      />
      <span
        className="palate olive-color"
        data-theme-file="css/color-themes/olive-theme.css"
      />
      <span
        className="palate red-color"
        data-theme-file="css/color-themes/red-theme.css"
      />
    </div>
  </div>
  <div className="palate-foo">
    <span>You can easily change and switch the colors.</span>
  </div>
</div>

  )
}
