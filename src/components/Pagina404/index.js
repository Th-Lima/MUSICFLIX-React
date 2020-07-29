import React from 'react';
import  Page404Base  from './styles';
import PageDefault from '../PageDefault';

function Page404() {
  return (
    <Page404Base>
          <PageDefault>
            <title>404</title>
            <div id="notfound" class="mt-0">
              <div class="notfound">
                <div class="notfound-404">
                  <h3>Oops! Página não encontrada</h3>
                  <h1><span>4</span><span>0</span><span>4</span></h1>
                </div>
                  <h2>Lamentamos, mas a página solicitada não foi encontrada</h2>
                </div>
            </div>
            </PageDefault>
    </Page404Base>
  );
}

export default Page404;
