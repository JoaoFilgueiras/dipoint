import { AppProps } from 'next/app';
import { storeContainer } from '../redux/store';
import '../../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps ) {
  return <Component {...pageProps} />
}

export default storeContainer.withRedux(MyApp);
