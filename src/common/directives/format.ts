import type { DirectiveBinding } from 'vue'

export function formatCurrency(el: HTMLElement, binding: DirectiveBinding) {
    const formatter = new Intl.NumberFormat('en-GB', { maximumSignificantDigits: 2, currency: 'GBP' })
    el.innerText = formatter.format(binding.value)
}
