import zipWith from "lodash/zipWith";

export const formatFile = file => {
  if (!file) return null;
  return {
    name: file.name,
    url: file.response || file.url,
    status: "done"
  };
};

export const formatModule = moduleForm => {
  const {
    id,
    worldId,
    name,
    image,
    introAudio,
    celebrationAudios,
    badgeImage,
    badgeBeforeAudios,
    badgeAfterAudios,
    giftBeforeAudios,
    giftAfterAudios
  } = moduleForm;

  const formatedImage = image && image[0];
  const formatedIntroAudio = introAudio && introAudio[0];
  const formatedBadgeImage = badgeImage && badgeImage[0];

  const formatedCelebrationAudios =
    celebrationAudios &&
    celebrationAudios.map(audio => {
      return formatFile(audio);
    });

  const formatedBadgeBeforeAudios =
    badgeBeforeAudios &&
    badgeBeforeAudios.map(audio => {
      return formatFile(audio);
    });

  const formatedBadgeAfterAudios =
    badgeAfterAudios &&
    badgeAfterAudios.map(audio => {
      return formatFile(audio);
    });

  const formatedGiftBeforeAudios =
    giftBeforeAudios &&
    giftBeforeAudios.map(audio => {
      return formatFile(audio);
    });

  const formatedGiftAfterAudios =
    giftAfterAudios &&
    giftAfterAudios.map(audio => {
      return formatFile(audio);
    });

  return {
    id,
    worldId,
    name,
    image: formatFile(formatedImage),
    introAudio: formatFile(formatedIntroAudio),
    celebrationAudios: formatedCelebrationAudios,
    badgeImage: formatFile(formatedBadgeImage),
    badgeBeforeAudios: formatedBadgeBeforeAudios,
    badgeAfterAudios: formatedBadgeAfterAudios,
    giftBeforeAudios: formatedGiftBeforeAudios,
    giftAfterAudios: formatedGiftAfterAudios
  };
};

export const formatTopic = worldForm => {
  const {
    id,
    worldId,
    name,
    image,
    introAudio,
    celebrationAudios,
    badgeImage,
    badgeBeforeAudios,
    badgeAfterAudios,
    giftBeforeAudios,
    giftAfterAudios
  } = worldForm;

  const formatedImage = image && image[0];
  const formatedIntroAudio = introAudio && introAudio[0];
  const formatedBadgeImage = badgeImage && badgeImage[0];

  const formatedCelebrationAudios =
    celebrationAudios &&
    celebrationAudios.map(audio => {
      return formatFile(audio);
    });

  const formatedBadgeBeforeAudios =
    badgeBeforeAudios &&
    badgeBeforeAudios.map(audio => {
      return formatFile(audio);
    });

  const formatedBadgeAfterAudios =
    badgeAfterAudios &&
    badgeAfterAudios.map(audio => {
      return formatFile(audio);
    });

  const formatedGiftBeforeAudios =
    giftBeforeAudios &&
    giftBeforeAudios.map(audio => {
      return formatFile(audio);
    });

  const formatedGiftAfterAudios =
    giftAfterAudios &&
    giftAfterAudios.map(audio => {
      return formatFile(audio);
    });

  return {
    id,
    worldId,
    name,
    image: formatFile(formatedImage),
    introAudio: formatFile(formatedIntroAudio),
    celebrationAudios: formatedCelebrationAudios,
    badgeImage: formatFile(formatedBadgeImage),
    badgeBeforeAudios: formatedBadgeBeforeAudios,
    badgeAfterAudios: formatedBadgeAfterAudios,
    giftBeforeAudios: formatedGiftBeforeAudios,
    giftAfterAudios: formatedGiftAfterAudios
  };
};

export const formatWolrd = worldForm => {
  const {
    id,
    name,
    unlockRestriction,
    backgroundImage,
    backgroundStoryImages,
    backgroundStoryAudios,
    unlockStoryImages,
    unlockStoryAudios,
    levelUpAudios,
    transitionImages,
    transitionAudios
  } = worldForm;

  const formatedBackgroundImage = backgroundImage && backgroundImage[0];
  const formatedBackgroundStory = zipData(
    backgroundStoryImages,
    backgroundStoryAudios
  );
  const formatedUnlockStories = zipData(unlockStoryImages, unlockStoryAudios);
  const formatedTransitions = zipData(transitionImages, transitionAudios);

  const formatedLevelUpAudios =
    levelUpAudios &&
    levelUpAudios.map(audio => {
      return formatFile(audio);
    });

  return {
    id,
    name,
    unlockRestriction,
    backgroundImage: formatFile(formatedBackgroundImage),
    backgroundStories: formatedBackgroundStory,
    unlockStories: formatedUnlockStories,
    levelUpAudios: formatedLevelUpAudios,
    transitions: formatedTransitions
  };
};

export const revertWolrd = world => {
  const {
    name,
    unlockRestriction,
    backgroundImage,
    backgroundStories,
    unlockStories,
    levelUpAudios,
    transitions
  } = world;

  backgroundImage.uid = "sdfdsf-sdfdsf";
  const formatedBackgroundImage = [backgroundImage];
  const {
    images: backgroundStoryImages,
    audios: backgroundStoryAudios
  } = unzipData(backgroundStories);
  const { images: unlockStoryImages, audios: unlockStoryAudios } = unzipData(
    unlockStories
  );
  const { images: transitionImages, audios: transitionAudios } = unzipData(
    transitions
  );

  const formatedLevelUpAudios = unzipSingleData(levelUpAudios);

  return {
    name,
    unlockRestriction,
    backgroundImage: formatedBackgroundImage,
    backgroundStoryImages,
    backgroundStoryAudios,
    unlockStoryImages,
    unlockStoryAudios,
    levelUpAudios: formatedLevelUpAudios,
    transitionImages,
    transitionAudios
  };
};

export const revertTopic = topic => {
  const {
    id,
    worldId,
    name,
    image,
    introAudio,
    celebrationAudios,
    badgeImage,
    badgeBeforeAudios,
    badgeAfterAudios,
    giftBeforeAudios,
    giftAfterAudios
  } = topic;

  image.uid = "sdfdsf-sdfdsf";
  introAudio.uid = "asdfasdf";
  badgeImage.uid = "123213";

  return {
    id,
    worldId,
    key: worldId,
    name,
    image: [image],
    introAudio: [introAudio],
    celebrationAudios: unzipSingleData(celebrationAudios),
    badgeImage: [badgeImage],
    badgeBeforeAudios: unzipSingleData(badgeBeforeAudios),
    badgeAfterAudios: unzipSingleData(badgeAfterAudios),
    giftBeforeAudios: unzipSingleData(giftBeforeAudios),
    giftAfterAudios: unzipSingleData(giftAfterAudios)
  };
};

// export const revertTrueFalseQuestion = question => {
//   const {
//     id,
//     worldId,
//     name,
//     image,
//     introAudio,
//     celebrationAudios,
//     badgeImage,
//     badgeBeforeAudios,
//     badgeAfterAudios,
//     giftBeforeAudios,
//     giftAfterAudios
//   } = question;

//   image.uid = "sdfdsf-sdfdsf";
//   introAudio.uid = "asdfasdf";
//   badgeImage.uid = "123213";

//   return {
//     id,
//     worldId,
//     key: worldId,
//     name,
//     image: [image],
//     introAudio: [introAudio],
//     celebrationAudios: unzipSingleData(celebrationAudios),
//     badgeImage: [badgeImage],
//     badgeBeforeAudios: unzipSingleData(badgeBeforeAudios),
//     badgeAfterAudios: unzipSingleData(badgeAfterAudios),
//     giftBeforeAudios: unzipSingleData(giftBeforeAudios),
//     giftAfterAudios: unzipSingleData(giftAfterAudios)
//   };
// };

// export const revertChoiceQuestion = question => {
//   const {
//     id,
//     worldId,
//     name,
//     image,
//     introAudio,
//     celebrationAudios,
//     badgeImage,
//     badgeBeforeAudios,
//     badgeAfterAudios,
//     giftBeforeAudios,
//     giftAfterAudios
//   } = topic;

//   image.uid = "sdfdsf-sdfdsf";
//   introAudio.uid = "asdfasdf";
//   badgeImage.uid = "123213";

//   return {
//     id,
//     worldId,
//     key: worldId,
//     name,
//     image: [image],
//     introAudio: [introAudio],
//     celebrationAudios: unzipSingleData(celebrationAudios),
//     badgeImage: [badgeImage],
//     badgeBeforeAudios: unzipSingleData(badgeBeforeAudios),
//     badgeAfterAudios: unzipSingleData(badgeAfterAudios),
//     giftBeforeAudios: unzipSingleData(giftBeforeAudios),
//     giftAfterAudios: unzipSingleData(giftAfterAudios)
//   };
// };

// [{audio, image}, {audio, image}] => [audios] [images]
// so that we can display data at front-end
export const unzipData = dataArray => {
  const audios = [];
  const images = [];

  dataArray.forEach(data => {
    data.audio.uid = Math.random();
    data.image.uid = Math.random();
    audios.push(data.audio);
    images.push(data.image);
  });

  return {
    audios,
    images
  };
};

export const unzipSingleData = dataArray => {
  return dataArray.map(data => {
    data.uid = Math.random();
    return data;
  });
};

// [audios] [images] => [{audio, image}, {audio, image}]
// so that we can save the data to server
export const zipData = (firstData, secondData) => {
  return zipWith(firstData, secondData, (image, audio) => {
    return {
      image: formatFile(image),
      audio: formatFile(audio)
    };
  });
};
