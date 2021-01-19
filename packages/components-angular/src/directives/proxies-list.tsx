
import * as d from './proxies';

export const DIRECTIVES = [
d.AppLogo,
  d.AppMegaMenu,
  d.AppNavigationMainMobile,
  d.AppNavigationSectorMobile,
  d.ScaleAccordion,
  d.ScaleAlert,
  d.ScaleAppFooter,
  d.ScaleAppHeader,
  d.ScaleAppShell,
  d.ScaleBreadcrumb,
  d.ScaleButton,
  d.ScaleCard,
  d.ScaleCarousel,
  d.ScaleChartStackCard,
  d.ScaleCollapsible,
  d.ScaleDivider,
  d.ScaleIcon,
  d.ScaleIconActionAdd,
  d.ScaleIconActionAddCard,
  d.ScaleIconActionAutoLogin,
  d.ScaleIconActionBackspace,
  d.ScaleIconActionChangelog,
  d.ScaleIconActionCircleAdd,
  d.ScaleIconActionCircleClose,
  d.ScaleIconActionClose,
  d.ScaleIconActionCopyPaste,
  d.ScaleIconActionCutPaste,
  d.ScaleIconActionDisabledMicrophone,
  d.ScaleIconActionDownload,
  d.ScaleIconActionDragAndDrop,
  d.ScaleIconActionEdit,
  d.ScaleIconActionFastForward,
  d.ScaleIconActionFavorite,
  d.ScaleIconActionFilter,
  d.ScaleIconActionForward,
  d.ScaleIconActionFullScreen,
  d.ScaleIconActionHidePassword,
  d.ScaleIconActionInstall,
  d.ScaleIconActionLink,
  d.ScaleIconActionLogout,
  d.ScaleIconActionLoop,
  d.ScaleIconActionMenu,
  d.ScaleIconActionMicrophone,
  d.ScaleIconActionMinimizeScreen,
  d.ScaleIconActionMore,
  d.ScaleIconActionMove,
  d.ScaleIconActionMute,
  d.ScaleIconActionNotification,
  d.ScaleIconActionPause,
  d.ScaleIconActionPin,
  d.ScaleIconActionPlay,
  d.ScaleIconActionPopUpWindow,
  d.ScaleIconActionPrint,
  d.ScaleIconActionRandom,
  d.ScaleIconActionRefresh,
  d.ScaleIconActionRemove,
  d.ScaleIconActionRestart,
  d.ScaleIconActionSearch,
  d.ScaleIconActionShoppingCart,
  d.ScaleIconActionShowPassword,
  d.ScaleIconActionSort,
  d.ScaleIconActionSoundOn,
  d.ScaleIconActionStreamOn,
  d.ScaleIconActionSuccess,
  d.ScaleIconActionThumbsDown,
  d.ScaleIconActionThumbsUp,
  d.ScaleIconActionTilesAdd,
  d.ScaleIconActionUpload,
  d.ScaleIconActionVolumeDown,
  d.ScaleIconActionVolumeUp,
  d.ScaleIconActionZoomIn,
  d.ScaleIconActionZoomOut,
  d.ScaleIconAlertCompliance,
  d.ScaleIconAlertError,
  d.ScaleIconAlertHelp,
  d.ScaleIconAlertImprintDataprivacy,
  d.ScaleIconAlertInformation,
  d.ScaleIconAlertLegal,
  d.ScaleIconAlertSecurity,
  d.ScaleIconAlertWarning,
  d.ScaleIconCommunicationCallIncoming,
  d.ScaleIconCommunicationCallOutgoing,
  d.ScaleIconCommunicationChat,
  d.ScaleIconCommunicationEmail,
  d.ScaleIconCommunicationEndCall,
  d.ScaleIconCommunicationFeedback,
  d.ScaleIconCommunicationMessage,
  d.ScaleIconCommunicationPhoneNumber,
  d.ScaleIconCommunicationRecipient,
  d.ScaleIconCommunicationVoiceMessage,
  d.ScaleIconContentAchievement,
  d.ScaleIconContentApplications,
  d.ScaleIconContentBiometric,
  d.ScaleIconContentBookmark,
  d.ScaleIconContentCalendar,
  d.ScaleIconContentClipboard,
  d.ScaleIconContentClock,
  d.ScaleIconContentCreditCard,
  d.ScaleIconContentDelivery,
  d.ScaleIconContentDigitalBanking,
  d.ScaleIconContentDigitalMedia,
  d.ScaleIconContentDraftFile,
  d.ScaleIconContentESim,
  d.ScaleIconContentEu,
  d.ScaleIconContentFeatures,
  d.ScaleIconContentFlexibleTariffs,
  d.ScaleIconContentHeart,
  d.ScaleIconContentHistory,
  d.ScaleIconContentInternational,
  d.ScaleIconContentInternationalSms,
  d.ScaleIconContentInterview,
  d.ScaleIconContentKey,
  d.ScaleIconContentLock,
  d.ScaleIconContentMediaFolder,
  d.ScaleIconContentMoneyAt,
  d.ScaleIconContentMusic,
  d.ScaleIconContentNews,
  d.ScaleIconContentPrepaidActivate,
  d.ScaleIconContentPriceTag,
  d.ScaleIconContentRss,
  d.ScaleIconContentShop,
  d.ScaleIconContentSignal,
  d.ScaleIconContentSimCard,
  d.ScaleIconContentSmile,
  d.ScaleIconContentTariffs,
  d.ScaleIconContentTransport,
  d.ScaleIconContentUnlock,
  d.ScaleIconContentVoucher,
  d.ScaleIconContentWallet,
  d.ScaleIconDeviceAddDevice,
  d.ScaleIconDeviceCamera,
  d.ScaleIconDeviceChangeCamera,
  d.ScaleIconDeviceComputer,
  d.ScaleIconDeviceDevicePhone,
  d.ScaleIconDeviceDeviceRouter,
  d.ScaleIconDeviceDeviceTv,
  d.ScaleIconDeviceDeviceWatch,
  d.ScaleIconDeviceFixedLineServices,
  d.ScaleIconDeviceMediaReceiver,
  d.ScaleIconDeviceMobileDevicesCombination,
  d.ScaleIconDeviceMobileEquipment,
  d.ScaleIconDeviceMobilePhoneInsurance,
  d.ScaleIconDeviceMobileServices,
  d.ScaleIconDeviceNoCamera,
  d.ScaleIconDevicePhotoCamera,
  d.ScaleIconDeviceRemoteController,
  d.ScaleIconDeviceReplacementMobilephone,
  d.ScaleIconDeviceScreenRotate,
  d.ScaleIconDeviceSmartSpeaker,
  d.ScaleIconDeviceTvAndMobile,
  d.ScaleIconHomeHome,
  d.ScaleIconHomeInternetAtHome,
  d.ScaleIconHomeIot,
  d.ScaleIconHomeNoWifi,
  d.ScaleIconHomeSmarthome,
  d.ScaleIconHomeWifi,
  d.ScaleIconNavigationCircleTopUp,
  d.ScaleIconNavigationCollapseDown,
  d.ScaleIconNavigationCollapseUp,
  d.ScaleIconNavigationExternalLink,
  d.ScaleIconNavigationInternalLink,
  d.ScaleIconNavigationLeft,
  d.ScaleIconNavigationLocation,
  d.ScaleIconNavigationMyLocation,
  d.ScaleIconNavigationRight,
  d.ScaleIconNavigationStart,
  d.ScaleIconNavigationTopUp,
  d.ScaleIconProcessOrderStatus,
  d.ScaleIconProcessProcessing,
  d.ScaleIconServiceDevicesService,
  d.ScaleIconServiceMaintanance,
  d.ScaleIconServiceServices,
  d.ScaleIconServiceSettings,
  d.ScaleIconServiceSupport,
  d.ScaleIconT_productMagentaCloud,
  d.ScaleIconT_productMagentaTv,
  d.ScaleIconT_productMagentaone,
  d.ScaleIconT_productMeasureInternetSpeed,
  d.ScaleIconT_productSeamlessConnectivity,
  d.ScaleIconT_productTelekomShopB,
  d.ScaleIconT_productUsage,
  d.ScaleIconUser_fileAnalytics,
  d.ScaleIconUser_fileAttachment,
  d.ScaleIconUser_fileAudioFile,
  d.ScaleIconUser_fileBilling,
  d.ScaleIconUser_fileBussinesUsers,
  d.ScaleIconUser_fileCommunities,
  d.ScaleIconUser_fileContacts,
  d.ScaleIconUser_fileContracts,
  d.ScaleIconUser_fileFamilies,
  d.ScaleIconUser_fileHandshake,
  d.ScaleIconUser_fileIdCard,
  d.ScaleIconUser_fileImageFile,
  d.ScaleIconUser_fileLogout,
  d.ScaleIconUser_filePdfFile,
  d.ScaleIconUser_fileSwitchUsers,
  d.ScaleIconUser_fileUser,
  d.ScaleIconUser_fileVideos,
  d.ScaleInput,
  d.ScaleLink,
  d.ScaleList,
  d.ScaleListItem,
  d.ScaleModal,
  d.ScaleProgressBar,
  d.ScaleSidebarNav,
  d.ScaleSidebarNavCollapsible,
  d.ScaleSidebarNavItem,
  d.ScaleSlider,
  d.ScaleSsrSlotFix,
  d.ScaleSwitch,
  d.ScaleTabHeader,
  d.ScaleTabNav,
  d.ScaleTabPanel,
  d.ScaleTable,
  d.ScaleTag,
  d.ScaleText,
  d.ScaleToast
];
