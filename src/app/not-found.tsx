import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <p className="eyebrow">Page Not Found</p>
        <h1 className="page-title">페이지를 찾을 수 없습니다</h1>
        <p className="lead">주소가 바뀌었거나 준비 중인 페이지입니다. 홈으로 돌아가 다시 탐색해 주세요.</p>
        <div style={{ marginTop: 28 }}>
          <Link className="button button-primary" href="/">
            홈으로 이동
          </Link>
        </div>
      </div>
    </section>
  );
}
