
const required = value => ((value || value === 0) ? undefined : 'This field is required');

export { required };
