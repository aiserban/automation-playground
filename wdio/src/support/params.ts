import { defineParameterType } from '@wdio/cucumber-framework';

defineParameterType({
  name: 'page',
  regexp: /[Ll]ogin|[Pp]roducts/,
  useForSnippets: true,
  transformer: function (s) {
    return s.toLowerCase();
  },
});
