import { configureHttp } from '@truefit/http-utils';

export function httpInit() {
  configureHttp({
    baseConfig: {
      baseURL: 'https://124.221.232.27:7272/',
    },
  });

}