/**
 * A custom directive to format a phone number input with the format "(##) #####-####".
 * The mask is applied as the user types.
 *
 * Usage: <input v-phone />
 */
export default {
  /**
   * The mounted hook is called once the directive is attached to the element.
   * Is added an event listener for the 'input' event, which is fired when the user types.
   * And also get the mask from the binding value, initializing the index variable to 0.
   *
   * @param {HTMLElement} el - The element that the directive is attached to.
   * @param {Object} binding - The binding object that contains the directive's information.
   */
  mounted(el, binding) {
    const mask = binding.value;
    let index = 0;

    el.addEventListener('input', (event) => {
      const input = event.target;
      const numbers = input.value.replace(/\D/g, '');
      let result = mask.replace(/[^#]/g, '').substring(0, numbers.length);
      index = 0;
      result = result.replace(/#/g, () => numbers.charAt(index++));
      result = result.replace(/\D/g,'')
      result = result.replace(/(\d{2})(\d)/,"($1) $2")
      result = result.replace(/(\d)(\d{4})$/,"$1-$2")
      input.value = result;
    });
  },
};
