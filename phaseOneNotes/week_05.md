# Day 1
## Web Accessibility
- Web Content Accessibility Guidelines (WCAG) explains how to make web content more accessible to people with disabilities. WCAG covers web sites, applications, and other digital content. It is developed by the World Wide Web Consortium (W3C) Web Accessibility Initiative (WAI). WCAG is an international standard.
- There are three levels of conformance:
1. Level A is the minimum level.
2. Level AA includes all Level A and AA requirements. Many organizations strive to meet Level AA.
3. Level AAA includes all Level A, AA, and AAA requirements.
### Keyboard Shortcuts
- Tab and shift+tab are the most important buttons regarding web accessibility. Keyboard accessibility is one of the most important aspects of web accessibility. Many users with motor disabilities rely on a keyboard. A keyboard user typically uses the Tab key to navigate through interactive elements on a web page—links, buttons, fields for inputting text, etc. When an item is tabbed to, it has keyboard "focus" and can be activated or manipulated with the keyboard. Are you able to reach all of the interactive controls on the page? If not, you may need to use tabindex to improve the focusability of those controls. The general rule of thumb is that any control a user can interact with or provide input to should aim to be focusable and display a focus indicator. If a keyboard user can't see what's focused, they have no way of interacting with the page. A tabindex can make an element that is not naturally tabbable, able to be tabbable. An example of an element you could use tab index on that is no otherwise tabbable is a div. Elements that are naturally tabbable are:
1. elements that have an href attribute
2. link elements that have an href attribute
3. button elements
4. input elements whose type attribute are not in the Hidden state
5. select elements
6. textarea elements
7. Editing hosts
8. Browsing context containers
### Focus Based Elements
- Some of the elements that will take a focus are:
1. HTMLAnchorElement/HTMLAreaElement with an href
2. HTMLInputElement/HTMLSelectElement/HTMLTextAreaElement/HTMLButtonElement but not with disabled (IE actually gives you an error if you try), and file uploads have unusual behaviour for security reasons
3. HTMLIFrameElement (though focusing it doesn't do anything useful). Other embedding elements also, maybe, I haven't tested them all.
4. Any element with a tabindex
### Skip Links
- provide a link at the top of the page which jumps the user down to an anchor or target at the beginning of the main content. Can be accomplished by:
1. Providing visible links at the top of the page
2. Providing visible links elsewhere on the page
3. Making the link invisible
4. Making the link invisible until it receives keyboard focus
### Color Ratio
- Ratio: Text and interactive elements should have a color contrast ratio of at least 4.5:1.
- Color as indicator: Color should not be the only indicator for interactive elements. For example, underline links on hover, or mark a required field with an asterisk.
- Color blindness: Red/green color blindness is the most common, so avoid green on red or red on green. (Think especially about avoiding using red and green for “bad” and “good” indicators).
### Resources:
- [David Walsh Blog A blog featuring tutorials about JavaScript, HTML5, AJAX, PHP, CSS, WordPress, and everything else development.](https://davidwalsh.name/)
- [Scalable and Modular Architecture for CSS](http://smacss.com/)
- [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/)
- [WebAim - With Accessibility in Mind](https://webaim.org/)
- [developers.google](https://developers.google.com/web/fundamentals/accessibility/focus)
- [css-tricks](https://css-tricks.com/almanac/selectors/f/focus-within/)
