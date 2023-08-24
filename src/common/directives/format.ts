import { formatBalance } from '@/services/helpers/balance'
import type { DirectiveBinding } from 'vue'

export function formatCurrency(el: HTMLElement, binding: DirectiveBinding) {
    el.textContent = formatBalance(binding.value)
}
