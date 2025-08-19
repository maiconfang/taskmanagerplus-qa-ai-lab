// NOTE: Keep selectors minimal and stable. Prefer data-testid attributes.
// If UI changes, paste the HTML diff into an AI prompt and ask to update this map only.

export const SEL = {
  login: {
    username: 'login-username',
    password: 'login-password',
    submit:   'login-submit',
    errorArea: '[data-testid="login-errors"]', // or a text locator if needed
  },
  dashboard: {
    title: 'dashboard-title',
    filterPending: 'filter-pending',
    filterCompleted: 'filter-completed',
  },
};
