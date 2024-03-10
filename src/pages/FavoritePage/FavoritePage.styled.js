import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
  padding-left: 128px;
  padding-right: 128px;
  padding-bottom: 150px;
  text-align: center;
`;

export const TextSkeleton = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const CatalogList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 29px;
  padding: 0;
  list-style: none;
`;

export const BtnLoadMore = styled.button`
  cursor: pointer;
  margin: 100px auto 0;
  display: block;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  border: none;
`;
