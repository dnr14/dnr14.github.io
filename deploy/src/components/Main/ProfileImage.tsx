import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import chrome from 'images/chrome.png';
// 자신이 원하는 프로필 이미지 링크로 설정해주세요.

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`;

const ProfileImage: FunctionComponent = () => {
  return <ProfileImageWrapper src={chrome} alt="Profile Image" />;
};

export default ProfileImage;
