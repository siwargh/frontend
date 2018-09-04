import { BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef } from 'angular-maps';


export function MapServiceProviderFactory() {
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey = 'AuOjVRahSs9GH6-2s_F0TXSnjptrHDOzFFJLg6T-w_JYJyozTE4QVUJ6X8U1aFnP' // your bing map key
  bc.branch = 'experimental';
      // to use the experimental bing brach. There are some bug fixes for
      // clustering in that branch you will need if you want to use
      // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}
