import * as React from "react"
import { navLink } from "./skip-nav.module.css"

const defaultId = `skip-to-content`

export function SkipNavLink({
  children = `Skip to content`,
  contentId,
  ...props
}) {
  const id = contentId || defaultId

  return (
    <a className={navLink} {...props} href={`#${id}`} data-skip-to-content>
      {children}
    </a>
  )
}

/**
<<<<<<< HEAD
<<<<<<< HEAD
 * Wrap the gmc content of a page with this, thus also the <gmc> tag
=======
 * Wrap the main content of a page with this, thus also the <main> tag
>>>>>>> 2a5e017ec97091a204eb7a1dc886404e20c5a6a9
=======
 * Wrap the gmc content of a page with this, thus also the <gmc> tag
>>>>>>> 7ead5fb6b16cf71c81ab988a63e3444c0800e398
 */
export function SkipNavContent({ children, id: idProp, ...props }) {
  const id = idProp || defaultId

  return (
    <main {...props} id={id}>
      {children}
    </main>
  )
}
