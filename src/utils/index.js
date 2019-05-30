import zipWith from "lodash/zipWith";

export const formatFile = file => {
  return {
    name: file.name,
    url: file.response || file.url,
    status: "done"
  };
};

export const formatWolrd = worldForm => {
  const {
    name,
    unlockRestriction,
    backgroundImage,
    backgroundStoryImages,
    backgroundStoryAudios,
    unlockStoryImages,
    unlockStoryAudios,
    levelupAudios,
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
    levelupAudios &&
    levelupAudios.map(audio => {
      return formatFile(audio);
    });

  return {
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
    levelupAudios,
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

  return {
    name,
    unlockRestriction,
    backgroundImage: formatedBackgroundImage,
    backgroundStoryImages,
    backgroundStoryAudios,
    unlockStoryImages,
    unlockStoryAudios,
    levelupAudios,
    transitionImages,
    transitionAudios
  };
};

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
