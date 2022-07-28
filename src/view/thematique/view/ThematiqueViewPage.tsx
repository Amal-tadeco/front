import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/thematique/view/thematiqueViewActions';
import selectors from 'src/modules/thematique/view/thematiqueViewSelectors';
import ThematiqueView from 'src/view/thematique/view/ThematiqueView';
import ThematiqueViewToolbar from 'src/view/thematique/view/ThematiqueViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ThematiquePage = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.thematique.menu'), '/thematique'],
          [i18n('entities.thematique.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.thematique.view.title')}
        </PageTitle>

        <ThematiqueViewToolbar match={match} />

        <ThematiqueView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default ThematiquePage;
