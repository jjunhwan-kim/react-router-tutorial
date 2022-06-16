import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 뒤로 한 번 가기
  };

  const goArticles = () => {
    navigate('/articles', { replace: true }); // replace true시 goArticles 호출 시점에 떠있는 페이지를 기록에 남기지 않음
  };

  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
