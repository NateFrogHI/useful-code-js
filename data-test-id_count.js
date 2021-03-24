/**
 * Script that can be entered into browser console to count how many data-test-id attributes
 *     are not unique on a website.
 */

Array.from(
    new Set(
        Array.from(document.querySelectorAll("[data-test-id]"))
            .map(node => node.dataset.testId)
    )
)
    .map(id => Array.from(document.querySelectorAll(`[data-test-id="${id}"]`)))
    .filter(x => x.length>1)
    .length
