import {Color} from '../Utils/Color';
import {
  AddGroupSvg,
  CircleAvatar,
  CircleHelpSvg,
  CreditCardSvg,
  DocumentSvg,
  FAQSvg,
  FileSvg,
  InfoSvg,
  Intrest1,
  Intrest2,
  Intrest3,
  Intrest4,
  Intrest5,
  Intrest6,
  LikeSvg,
  MoreSvg,
  OrbitSvg,
  SaturnSvg,
  SettingSvg2,
  SolidSvg,
  SubscriptionSvg,
} from '../Components/SvgComponent';
export const getIcon = (value, Active) => {
  const isActive =
    Active == value?.value ? Color.regularViolet : Color.lightViolet;
  switch (value?.value) {
    case 'Home':
      return <SaturnSvg fill={isActive} />;
    case 'Compatibility':
      return <OrbitSvg fill={isActive} />;
    case 'Remedy':
      return <SolidSvg fill={isActive} />;
    case 'More':
      return <MoreSvg fill={isActive} />;
    case 'bell':
      return <SubscriptionSvg fill={Color.primaryBlue} />;
    case 'FAQ':
      return <FAQSvg fill={Color.primaryBlue} />;
    case 'File':
      return <DocumentSvg stroke={Color.primaryBlue} />;
    case 'terms':
      return <FileSvg fill={Color.primaryBlue} />;
    case 'payment':
      return <CreditCardSvg fill={Color.primaryBlue} />;
    case 'info':
      return <InfoSvg fill={Color.primaryBlue} />;
    case 'invite':
      return <AddGroupSvg fill={Color.primaryBlue} />;
    case 'like':
      return <LikeSvg fill={Color.primaryBlue} />;
    case 'CircleProfile':
      return <CircleAvatar fill={Color.primaryBlue} />;
    case 'help':
      return <CircleHelpSvg fill={Color.primaryBlue} />;
    case 'settings':
      return <SettingSvg2 fill={Color.primaryBlue} />;
    case 'Profession':
      return <Intrest1 fill={Color.black} />;
    case 'Personal':
      return <Intrest2 fill={Color.black} />;
    case 'Travel':
      return <Intrest3 fill={Color.black} />;
    case 'Health':
      return <Intrest4 fill={Color.black} />;
    case 'Luck':
      return <Intrest5 fill={Color.black} />;
    case 'Emotion':
      return <Intrest6 fill={Color.black} />;
  }
};
