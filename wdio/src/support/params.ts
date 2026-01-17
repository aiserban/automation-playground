import { defineParameterType } from '@wdio/cucumber-framework';

defineParameterType({
  name: 'page',
  regexp:
    /[Ll]ogin|[Ii]nventory|[Cc]art|[Cc]heckout [Oo]verview|[Cc]heckout [Cc]omplete/,
  useForSnippets: true,
  transformer: function (s) {
    return s.toLowerCase();
  },
});
