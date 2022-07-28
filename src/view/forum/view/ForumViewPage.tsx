import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/forum/view/forumViewActions';
import selectors from 'src/modules/forum/view/forumViewSelectors';
import ForumView from 'src/view/forum/view/ForumView';
import ForumViewToolbar from 'src/view/forum/view/ForumViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ForumPage = (props) => {
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
          [i18n('entities.forum.menu'), '/forum'],
          [i18n('entities.forum.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.forum.view.title')}
        </PageTitle>

        <ForumViewToolbar match={match} />

        <ForumView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default ForumPage;
