if (typeof window.livewire === 'undefined') {
    throw 'Livewire Alpine Plugin: window.livewire is undefined. Make sure @livewireScripts is placed above this script include'
}

window.livewire.hook('afterDomUpdate', component => {
    if (! window.Alpine) return

    // Because .querySelector doesn't include the element its being called on.
    if (component.el.rawNode().hasAttribute('x-data')) {
        component.el.rawNode().__x && component.el.rawNode().__x.updateElements(component.el.rawNode().__x.$el)
    }

    component.el.querySelectorAll('[x-data]').forEach(el => {
        el.__x && el.__x.updateElements(el.__x.$el)
    })
})
