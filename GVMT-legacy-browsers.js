/************* 
 * Gvmt *
 *************/


// store info about the experiment session:
let expName = 'GVMT';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introductionRoutineBegin());
flowScheduler.add(introductionRoutineEachFrame());
flowScheduler.add(introductionRoutineEnd());
flowScheduler.add(sound_testRoutineBegin());
flowScheduler.add(sound_testRoutineEachFrame());
flowScheduler.add(sound_testRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(voice_task_introRoutineBegin());
flowScheduler.add(voice_task_introRoutineEachFrame());
flowScheduler.add(voice_task_introRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);



flowScheduler.add(voice_feedbackRoutineBegin());
flowScheduler.add(voice_feedbackRoutineEachFrame());
flowScheduler.add(voice_feedbackRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);


flowScheduler.add(bells_task_introRoutineBegin());
flowScheduler.add(bells_task_introRoutineEachFrame());
flowScheduler.add(bells_task_introRoutineEnd());
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);



flowScheduler.add(bells_feedbackRoutineBegin());
flowScheduler.add(bells_feedbackRoutineEachFrame());
flowScheduler.add(bells_feedbackRoutineEnd());
flowScheduler.add(finishRoutineBegin());
flowScheduler.add(finishRoutineEachFrame());
flowScheduler.add(finishRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions/vm_cond_file.csv', 'path': 'conditions/vm_cond_file.csv'},
    {'name': 'conditions/vt_cond_file.csv', 'path': 'conditions/vt_cond_file.csv'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID04.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID04.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID01.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID01.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID02.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID02.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID08.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID08.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID05.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID05.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID03.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID03.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID01.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID01.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID04.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID04.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID05.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID05.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID06.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID06.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID06.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID06.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID03.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID03.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID07.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID07.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID02.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID02.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID08.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID08.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID07.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID07.wav'},
    {'name': 'conditions/bm_cond_file.csv', 'path': 'conditions/bm_cond_file.csv'},
    {'name': 'conditions/bt_cond_file.csv', 'path': 'conditions/bt_cond_file.csv'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID01.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID01.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID06.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID06.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID02.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID02.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID05.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID05.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID03.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID03.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID04.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID04.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID03.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID03.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID01.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID01.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID08.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID08.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID05.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID05.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID06.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID06.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID04.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID04.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID07.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID07.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID02.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID02.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID07.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID07.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID08.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID08.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/FemaleAverage.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/FemaleAverage.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID01.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID01.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID02.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID02.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID03.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID03.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID04.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID04.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID05.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID05.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID06.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID06.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID07.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID07.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID08.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID08.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID01.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID01.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID02.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID02.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID03.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID03.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID04.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID04.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID05.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID05.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID06.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID06.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID07.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID07.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID08.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID08.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID01.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID01.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID02.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID02.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID03.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID03.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID04.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID04.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID05.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID05.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID06.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID06.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID07.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID07.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID08.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_New_ID08.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID01.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID01.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID02.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID02.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID03.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID03.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID04.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID04.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID05.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID05.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID06.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID06.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID07.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID07.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID08.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID08.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/FemaleAverage.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/FemaleAverage.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID01.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID01.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID02.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID02.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID03.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID03.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID04.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID04.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID05.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID05.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID06.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID06.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID07.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID07.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID08.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_New_ID08.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID01.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID01.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID02.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID02.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID03.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID03.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID04.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID04.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID05.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID05.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID06.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID06.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID07.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID07.wav'},
    {'name': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID08.wav', 'path': 'Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID08.wav'},
    {'name': 'conditions/bm_cond_file.csv', 'path': 'conditions/bm_cond_file.csv'},
    {'name': 'conditions/bt_cond_file.csv', 'path': 'conditions/bt_cond_file.csv'},
    {'name': 'conditions/vm_cond_file.csv', 'path': 'conditions/vm_cond_file.csv'},
    {'name': 'conditions/vt_cond_file.csv', 'path': 'conditions/vt_cond_file.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introductionClock;
var text;
var int_btn;
var debug;
var neverPlay;
var sound_testClock;
var st_text;
var st_play_btn;
var st_cont_btn;
var st_sound;
var voice_memorisationClock;
var vm_text;
var vm_btn;
var vm_sound_1;
var vm_sound_2;
var vm_sound_3;
var vm_sound_4;
var vm_sound_5;
var vm_sound_6;
var vm_sound_7;
var vm_sound_8;
var voice_task_introClock;
var vti_text;
var vti_btn;
var voice_task_loadClock;
var vtl_text;
var voice_taskClock;
var vt_text;
var vt_totalTrials;
var vt_totalCorrect;
var vt_sound;
var vt_key;
var voice_feedbackClock;
var vf_text;
var vf_btn;
var bells_memorisationClock;
var bm_text;
var bm_btn;
var bm_sound_1;
var bm_sound_2;
var bm_sound_3;
var bm_sound_4;
var bm_sound_5;
var bm_sound_6;
var bm_sound_7;
var bm_sound_8;
var bells_task_introClock;
var bti_text;
var bti_btn;
var bells_task_loadClock;
var btl_text;
var bells_taskClock;
var bt_text;
var bt_totalTrials;
var bt_totalCorrect;
var bt_sound;
var bt_key;
var bells_feedbackClock;
var bf_text;
var bf_btn;
var finishClock;
var fin_text;
var fin_btn;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "introduction"
  introductionClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Welcome to the Glasgow Voice Memory Test\n\nYour task is to listen to a series of eight voices and try to remember them.\nThis will be followed by another series of voices that will test your memory. For each one of those new voices, you will have to indicate if it belongs to the first series you have been trying to remember.\nThis will be repeated for ringing bells.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  int_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'int_btn',
    text: 'NEXT',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.03,
    size: [0.25, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  int_btn.clock = new util.Clock();
  
  // Run 'Begin Experiment' code from code_8
  debug = false;
  neverPlay = false;
  
  // Initialize components for Routine "sound_test"
  sound_testClock = new util.Clock();
  st_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'st_text',
    text: "Let's first check if your sound device works properly\n\nA sound will be played after you click the button below. You can replay the sound as many times as you wish\n\nPlease adjust the volume of your device at a comfortable level.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  st_play_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'st_play_btn',
    text: 'Test Sound',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.25)],
    letterHeight: 0.03,
    size: [0.25, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  st_play_btn.clock = new util.Clock();
  
  st_cont_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'st_cont_btn',
    text: 'Continue',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.03,
    size: [0.25, 0.1],
    ori: 0.0
    ,
    depth: -3
  });
  st_cont_btn.clock = new util.Clock();
  
  st_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  st_sound.setVolume(1.0);
  // Initialize components for Routine "voice_memorisation"
  voice_memorisationClock = new util.Clock();
  vm_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'vm_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  vm_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'vm_btn',
    text: 'placeholder',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.03,
    size: [0.25, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  vm_btn.clock = new util.Clock();
  
  vm_sound_1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  vm_sound_1.setVolume(1.0);
  vm_sound_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  vm_sound_2.setVolume(1.0);
  vm_sound_3 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  vm_sound_3.setVolume(1.0);
  vm_sound_4 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  vm_sound_4.setVolume(1.0);
  vm_sound_5 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  vm_sound_5.setVolume(1.0);
  vm_sound_6 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  vm_sound_6.setVolume(1.0);
  vm_sound_7 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  vm_sound_7.setVolume(1.0);
  vm_sound_8 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  vm_sound_8.setVolume(1.0);
  // Initialize components for Routine "voice_task_intro"
  voice_task_introClock = new util.Clock();
  vti_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'vti_text',
    text: 'Testing instruction\n\nDuring the testing phase, you will listen to "Voice" sounds that are either OLD (sounds that were presented during the familiarization phase) or NEW (sounds that were presented NOT during the familiarization phase).\n\nAfter the playback of a sound press:\n- Press \'z\' if you think this was an OLD sound\n- Press \'m\' if you think this was a NEW sound',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  vti_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'vti_btn',
    text: 'Next',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.03,
    size: [0.25, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  vti_btn.clock = new util.Clock();
  
  // Initialize components for Routine "voice_task_load"
  voice_task_loadClock = new util.Clock();
  vtl_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'vtl_text',
    text: 'Loading...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "voice_task"
  voice_taskClock = new util.Clock();
  vt_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'vt_text',
    text: "Is this Voice OLD or NEW?\n\nPress 'z' for OLD\nPress 'm' for NEW",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from code_3
  vt_totalTrials = 0;
  vt_totalCorrect = 0;
  
  vt_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  vt_sound.setVolume(1.0);
  vt_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "voice_feedback"
  voice_feedbackClock = new util.Clock();
  vf_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'vf_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  vf_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'vf_btn',
    text: 'Next',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.03,
    size: [0.25, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  vf_btn.clock = new util.Clock();
  
  // Initialize components for Routine "bells_memorisation"
  bells_memorisationClock = new util.Clock();
  bm_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bm_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  bm_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'bm_btn',
    text: ' ',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.03,
    size: [0.25, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  bm_btn.clock = new util.Clock();
  
  bm_sound_1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  bm_sound_1.setVolume(1.0);
  bm_sound_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  bm_sound_2.setVolume(1.0);
  bm_sound_3 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  bm_sound_3.setVolume(1.0);
  bm_sound_4 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  bm_sound_4.setVolume(1.0);
  bm_sound_5 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  bm_sound_5.setVolume(1.0);
  bm_sound_6 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  bm_sound_6.setVolume(1.0);
  bm_sound_7 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  bm_sound_7.setVolume(1.0);
  bm_sound_8 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  bm_sound_8.setVolume(1.0);
  // Initialize components for Routine "bells_task_intro"
  bells_task_introClock = new util.Clock();
  bti_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bti_text',
    text: 'Testing instruction\n\nDuring the testing phase, you will listen to "Bell" sounds that are either OLD (sounds that were presented during the familiarization phase) or NEW (sounds that were presented NOT during the familiarization phase).\n\nAfter the playback of a sound press:\n- Press \'z\' if you think this was an OLD sound\n- Press \'m\' if you think this was a NEW sound',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  bti_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'bti_btn',
    text: 'Next',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.03,
    size: [0.25, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  bti_btn.clock = new util.Clock();
  
  // Initialize components for Routine "bells_task_load"
  bells_task_loadClock = new util.Clock();
  btl_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'btl_text',
    text: 'Loading...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "bells_task"
  bells_taskClock = new util.Clock();
  bt_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bt_text',
    text: "Is this Bell OLD or NEW?\n\nPress 'z' for OLD\nPress 'm' for NEW",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from code_6
  bt_totalTrials = 0;
  bt_totalCorrect = 0;
  
  bt_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  bt_sound.setVolume(1.0);
  bt_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "bells_feedback"
  bells_feedbackClock = new util.Clock();
  bf_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bf_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  bf_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'bf_btn',
    text: 'Next',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.03,
    size: [0.25, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  bf_btn.clock = new util.Clock();
  
  // Initialize components for Routine "finish"
  finishClock = new util.Clock();
  fin_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fin_text',
    text: 'End of task\n\nThe task is over, thank you for your participation!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  fin_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'fin_btn',
    text: 'Finish',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.03,
    size: [0.25, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  fin_btn.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var introductionMaxDurationReached;
var introductionMaxDuration;
var introductionComponents;
function introductionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'introduction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    introductionClock.reset();
    routineTimer.reset();
    introductionMaxDurationReached = false;
    // update component parameters for each repeat
    // reset int_btn to account for continued clicks & clear times on/off
    int_btn.reset()
    psychoJS.experiment.addData('introduction.started', globalClock.getTime());
    introductionMaxDuration = null
    // keep track of which components have finished
    introductionComponents = [];
    introductionComponents.push(text);
    introductionComponents.push(int_btn);
    
    introductionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function introductionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'introduction' ---
    // get current time
    t = introductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *int_btn* updates
    if (t >= 0 && int_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      int_btn.tStart = t;  // (not accounting for frame time here)
      int_btn.frameNStart = frameN;  // exact frame index
      
      int_btn.setAutoDraw(true);
    }
    
    if (int_btn.status === PsychoJS.Status.STARTED) {
      // check whether int_btn has been pressed
      if (int_btn.isClicked) {
        if (!int_btn.wasClicked) {
          // store time of first click
          int_btn.timesOn.push(int_btn.clock.getTime());
          // store time clicked until
          int_btn.timesOff.push(int_btn.clock.getTime());
        } else {
          // update time clicked until;
          int_btn.timesOff[int_btn.timesOff.length - 1] = int_btn.clock.getTime();
        }
        if (!int_btn.wasClicked) {
          // end routine when int_btn is clicked
          continueRoutine = false;
          
        }
        // if int_btn is still clicked next frame, it is not a new click
        int_btn.wasClicked = true;
      } else {
        // if int_btn is clicked next frame, it is a new click
        int_btn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if int_btn hasn't started / has finished
      int_btn.clock.reset();
      // if int_btn is clicked next frame, it is a new click
      int_btn.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introductionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introductionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'introduction' ---
    introductionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('introduction.stopped', globalClock.getTime());
    psychoJS.experiment.addData('int_btn.numClicks', int_btn.numClicks);
    psychoJS.experiment.addData('int_btn.timesOn', int_btn.timesOn);
    psychoJS.experiment.addData('int_btn.timesOff', int_btn.timesOff);
    // the Routine "introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sound_testMaxDurationReached;
var st_play_once;
var st_soundPlaying;
var maxDurationReached;
var sound_testMaxDuration;
var sound_testComponents;
function sound_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sound_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    sound_testClock.reset();
    routineTimer.reset();
    sound_testMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    st_play_once = false;
    st_soundPlaying = false;
    
    // reset st_play_btn to account for continued clicks & clear times on/off
    st_play_btn.reset()
    // reset st_cont_btn to account for continued clicks & clear times on/off
    st_cont_btn.reset()
    st_sound.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/FemaleAverage.wav');
    st_sound.setVolume(1.0);
    psychoJS.experiment.addData('sound_test.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !(debug);
    maxDurationReached = false
    sound_testMaxDuration = null
    // keep track of which components have finished
    sound_testComponents = [];
    sound_testComponents.push(st_text);
    sound_testComponents.push(st_play_btn);
    sound_testComponents.push(st_cont_btn);
    sound_testComponents.push(st_sound);
    
    sound_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var st_playStart;
function sound_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sound_test' ---
    // get current time
    t = sound_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    // Check for button click only if sound not already playing
    if (st_play_btn.isClicked && !st_soundPlaying) {
        st_sound.play();
        st_soundPlaying = true;
        st_playStart = t;
    }
    
    // Monitor playback duration
    if (st_soundPlaying) {
        if ((t - st_playStart) >= st_sound.getDuration()) {
            st_soundPlaying = false;
        }
    }
    
    
    // *st_text* updates
    if (t >= 0.0 && st_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      st_text.tStart = t;  // (not accounting for frame time here)
      st_text.frameNStart = frameN;  // exact frame index
      
      st_text.setAutoDraw(true);
    }
    
    
    // *st_play_btn* updates
    if (t >= 0 && st_play_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      st_play_btn.tStart = t;  // (not accounting for frame time here)
      st_play_btn.frameNStart = frameN;  // exact frame index
      
      st_play_btn.setAutoDraw(true);
    }
    
    if (st_play_btn.status === PsychoJS.Status.STARTED) {
      // check whether st_play_btn has been pressed
      if (st_play_btn.isClicked) {
        if (!st_play_btn.wasClicked) {
          // store time of first click
          st_play_btn.timesOn.push(st_play_btn.clock.getTime());
          // store time clicked until
          st_play_btn.timesOff.push(st_play_btn.clock.getTime());
        } else {
          // update time clicked until;
          st_play_btn.timesOff[st_play_btn.timesOff.length - 1] = st_play_btn.clock.getTime();
        }
        if (!st_play_btn.wasClicked) {
          var st_play_once;
          st_play_once = true;
        }
        // if st_play_btn is still clicked next frame, it is not a new click
        st_play_btn.wasClicked = true;
      } else {
        // if st_play_btn is clicked next frame, it is a new click
        st_play_btn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if st_play_btn hasn't started / has finished
      st_play_btn.clock.reset();
      // if st_play_btn is clicked next frame, it is a new click
      st_play_btn.wasClicked = false;
    }
    
    // *st_cont_btn* updates
    if ((st_play_once) && st_cont_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      st_cont_btn.tStart = t;  // (not accounting for frame time here)
      st_cont_btn.frameNStart = frameN;  // exact frame index
      
      st_cont_btn.setAutoDraw(true);
    }
    
    if (st_cont_btn.status === PsychoJS.Status.STARTED) {
      // check whether st_cont_btn has been pressed
      if (st_cont_btn.isClicked) {
        if (!st_cont_btn.wasClicked) {
          // store time of first click
          st_cont_btn.timesOn.push(st_cont_btn.clock.getTime());
          // store time clicked until
          st_cont_btn.timesOff.push(st_cont_btn.clock.getTime());
        } else {
          // update time clicked until;
          st_cont_btn.timesOff[st_cont_btn.timesOff.length - 1] = st_cont_btn.clock.getTime();
        }
        if (!st_cont_btn.wasClicked) {
          // end routine when st_cont_btn is clicked
          continueRoutine = false;
          
        }
        // if st_cont_btn is still clicked next frame, it is not a new click
        st_cont_btn.wasClicked = true;
      } else {
        // if st_cont_btn is clicked next frame, it is a new click
        st_cont_btn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if st_cont_btn hasn't started / has finished
      st_cont_btn.clock.reset();
      // if st_cont_btn is clicked next frame, it is a new click
      st_cont_btn.wasClicked = false;
    }
    // start/stop st_sound
    if ((neverPlay) && st_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      st_sound.tStart = t;  // (not accounting for frame time here)
      st_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ st_sound.play(); });  // screen flip
      st_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (st_sound.getDuration() + st_sound.tStart)     && st_sound.status === PsychoJS.Status.STARTED) {
      st_sound.stop();  // stop the sound (if longer than duration)
      st_sound.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    sound_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sound_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sound_test' ---
    sound_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('sound_test.stopped', globalClock.getTime());
    psychoJS.experiment.addData('st_play_btn.numClicks', st_play_btn.numClicks);
    psychoJS.experiment.addData('st_play_btn.timesOn', st_play_btn.timesOn);
    psychoJS.experiment.addData('st_play_btn.timesOff', st_play_btn.timesOff);
    psychoJS.experiment.addData('st_cont_btn.numClicks', st_cont_btn.numClicks);
    psychoJS.experiment.addData('st_cont_btn.timesOn', st_cont_btn.timesOn);
    psychoJS.experiment.addData('st_cont_btn.timesOff', st_cont_btn.timesOff);
    st_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "sound_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/vm_cond_file.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(voice_memorisationRoutineBegin(snapshot));
      trialsLoopScheduler.add(voice_memorisationRoutineEachFrame());
      trialsLoopScheduler.add(voice_memorisationRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/vt_cond_file.csv',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(voice_task_loadRoutineBegin(snapshot));
      trials_2LoopScheduler.add(voice_task_loadRoutineEachFrame());
      trials_2LoopScheduler.add(voice_task_loadRoutineEnd(snapshot));
      trials_2LoopScheduler.add(voice_taskRoutineBegin(snapshot));
      trials_2LoopScheduler.add(voice_taskRoutineEachFrame());
      trials_2LoopScheduler.add(voice_taskRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/bm_cond_file.csv',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(bells_memorisationRoutineBegin(snapshot));
      trials_3LoopScheduler.add(bells_memorisationRoutineEachFrame());
      trials_3LoopScheduler.add(bells_memorisationRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/bt_cond_file.csv',
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_4.forEach(function() {
      snapshot = trials_4.getSnapshot();
    
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(bells_task_loadRoutineBegin(snapshot));
      trials_4LoopScheduler.add(bells_task_loadRoutineEachFrame());
      trials_4LoopScheduler.add(bells_task_loadRoutineEnd(snapshot));
      trials_4LoopScheduler.add(bells_taskRoutineBegin(snapshot));
      trials_4LoopScheduler.add(bells_taskRoutineEachFrame());
      trials_4LoopScheduler.add(bells_taskRoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var voice_memorisationMaxDurationReached;
var sounds;
var currentSoundIndex;
var playCount;
var isPlaying;
var nextPlayTime;
var labelSet;
var voice_memorisationMaxDuration;
var voice_memorisationComponents;
function voice_memorisationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'voice_memorisation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    voice_memorisationClock.reset();
    routineTimer.reset();
    voice_memorisationMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    vm_text.setText(vm_text_content);
    
    sounds = [vm_sound_1, vm_sound_2, vm_sound_3, vm_sound_4, vm_sound_5, vm_sound_6, vm_sound_7, vm_sound_8];
    currentSoundIndex = 0;
    playCount = 0;
    isPlaying = false;
    nextPlayTime = 0;
    labelSet = false;  // flag to track whether we've updated the button text
    
    // reset vm_btn to account for continued clicks & clear times on/off
    vm_btn.reset()
    vm_sound_1.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID01.wav');
    vm_sound_1.setVolume(1.0);
    vm_sound_2.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID02.wav');
    vm_sound_2.setVolume(1.0);
    vm_sound_3.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID03.wav');
    vm_sound_3.setVolume(1.0);
    vm_sound_4.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID04.wav');
    vm_sound_4.setVolume(1.0);
    vm_sound_5.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID05.wav');
    vm_sound_5.setVolume(1.0);
    vm_sound_6.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID06.wav');
    vm_sound_6.setVolume(1.0);
    vm_sound_7.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID07.wav');
    vm_sound_7.setVolume(1.0);
    vm_sound_8.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID08.wav');
    vm_sound_8.setVolume(1.0);
    psychoJS.experiment.addData('voice_memorisation.started', globalClock.getTime());
    voice_memorisationMaxDuration = null
    // keep track of which components have finished
    voice_memorisationComponents = [];
    voice_memorisationComponents.push(vm_text);
    voice_memorisationComponents.push(vm_btn);
    voice_memorisationComponents.push(vm_sound_1);
    voice_memorisationComponents.push(vm_sound_2);
    voice_memorisationComponents.push(vm_sound_3);
    voice_memorisationComponents.push(vm_sound_4);
    voice_memorisationComponents.push(vm_sound_5);
    voice_memorisationComponents.push(vm_sound_6);
    voice_memorisationComponents.push(vm_sound_7);
    voice_memorisationComponents.push(vm_sound_8);
    
    voice_memorisationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var soundStart;
function voice_memorisationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'voice_memorisation' ---
    // get current time
    t = voice_memorisationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *vm_text* updates
    if (t >= 0.0 && vm_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vm_text.tStart = t;  // (not accounting for frame time here)
      vm_text.frameNStart = frameN;  // exact frame index
      
      vm_text.setAutoDraw(true);
    }
    
    if (auto_proceed === 1) {
        continueRoutine = false;
        }
    
    if (!labelSet) {
        vm_btn.text = vm_btn_content;   // update ButtonStim text
        vm_btn.setAutoDraw(true);        // make sure it's visible
        labelSet = true;                 // prevent re-running every frame
    }
    
    if (vm_playSound) {
        vm_btn.setAutoDraw(false);  // stop drawing & interaction
    } else {
        vm_btn.setAutoDraw(true);   // show & clickable
    }
    
    if (vm_playSound && currentSoundIndex < sounds.length) {
        let snd = sounds[currentSoundIndex];
    
        if (!isPlaying && t >= nextPlayTime) {
            snd.play();
            isPlaying = true;
            soundStart = t;  // mark when it started
        }
    
        if (isPlaying) {
            let elapsed = t - soundStart;
            if (elapsed >= snd.getDuration()) {
                playCount += 1;
                isPlaying = false;
                nextPlayTime = t + 0.1;  // add buffer
                if (currentSoundIndex === 0) {
                    if (playCount >= 4) {
                        playCount = 0;
                        currentSoundIndex += 1;
                    }
                }
                if (currentSoundIndex > 0) {
                    if (playCount >= 3) {
                        playCount = 0;
                        currentSoundIndex += 1;
                    }
                }
            }
        }
    
        if (currentSoundIndex >= sounds.length) {
            continueRoutine = false;
        }
    }
    
    // *vm_btn* updates
    if (t >= 0 && vm_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vm_btn.tStart = t;  // (not accounting for frame time here)
      vm_btn.frameNStart = frameN;  // exact frame index
      
      vm_btn.setAutoDraw(true);
    }
    
    if (vm_btn.status === PsychoJS.Status.STARTED) {
      // check whether vm_btn has been pressed
      if (vm_btn.isClicked) {
        if (!vm_btn.wasClicked) {
          // store time of first click
          vm_btn.timesOn.push(vm_btn.clock.getTime());
          // store time clicked until
          vm_btn.timesOff.push(vm_btn.clock.getTime());
        } else {
          // update time clicked until;
          vm_btn.timesOff[vm_btn.timesOff.length - 1] = vm_btn.clock.getTime();
        }
        if (!vm_btn.wasClicked) {
          // end routine when vm_btn is clicked
          continueRoutine = false;
          
        }
        // if vm_btn is still clicked next frame, it is not a new click
        vm_btn.wasClicked = true;
      } else {
        // if vm_btn is clicked next frame, it is a new click
        vm_btn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if vm_btn hasn't started / has finished
      vm_btn.clock.reset();
      // if vm_btn is clicked next frame, it is a new click
      vm_btn.wasClicked = false;
    }
    // start/stop vm_sound_1
    if ((neverPlay) && vm_sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vm_sound_1.tStart = t;  // (not accounting for frame time here)
      vm_sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ vm_sound_1.play(); });  // screen flip
      vm_sound_1.status = PsychoJS.Status.STARTED;
    }
    if (t >= (vm_sound_1.getDuration() + vm_sound_1.tStart)     && vm_sound_1.status === PsychoJS.Status.STARTED) {
      vm_sound_1.stop();  // stop the sound (if longer than duration)
      vm_sound_1.status = PsychoJS.Status.FINISHED;
    }
    // start/stop vm_sound_2
    if ((neverPlay) && vm_sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vm_sound_2.tStart = t;  // (not accounting for frame time here)
      vm_sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ vm_sound_2.play(); });  // screen flip
      vm_sound_2.status = PsychoJS.Status.STARTED;
    }
    if (t >= (vm_sound_2.getDuration() + vm_sound_2.tStart)     && vm_sound_2.status === PsychoJS.Status.STARTED) {
      vm_sound_2.stop();  // stop the sound (if longer than duration)
      vm_sound_2.status = PsychoJS.Status.FINISHED;
    }
    // start/stop vm_sound_3
    if ((neverPlay) && vm_sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vm_sound_3.tStart = t;  // (not accounting for frame time here)
      vm_sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ vm_sound_3.play(); });  // screen flip
      vm_sound_3.status = PsychoJS.Status.STARTED;
    }
    if (t >= (vm_sound_3.getDuration() + vm_sound_3.tStart)     && vm_sound_3.status === PsychoJS.Status.STARTED) {
      vm_sound_3.stop();  // stop the sound (if longer than duration)
      vm_sound_3.status = PsychoJS.Status.FINISHED;
    }
    // start/stop vm_sound_4
    if ((neverPlay) && vm_sound_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vm_sound_4.tStart = t;  // (not accounting for frame time here)
      vm_sound_4.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ vm_sound_4.play(); });  // screen flip
      vm_sound_4.status = PsychoJS.Status.STARTED;
    }
    if (t >= (vm_sound_4.getDuration() + vm_sound_4.tStart)     && vm_sound_4.status === PsychoJS.Status.STARTED) {
      vm_sound_4.stop();  // stop the sound (if longer than duration)
      vm_sound_4.status = PsychoJS.Status.FINISHED;
    }
    // start/stop vm_sound_5
    if ((neverPlay) && vm_sound_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vm_sound_5.tStart = t;  // (not accounting for frame time here)
      vm_sound_5.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ vm_sound_5.play(); });  // screen flip
      vm_sound_5.status = PsychoJS.Status.STARTED;
    }
    if (t >= (vm_sound_5.getDuration() + vm_sound_5.tStart)     && vm_sound_5.status === PsychoJS.Status.STARTED) {
      vm_sound_5.stop();  // stop the sound (if longer than duration)
      vm_sound_5.status = PsychoJS.Status.FINISHED;
    }
    // start/stop vm_sound_6
    if ((neverPlay) && vm_sound_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vm_sound_6.tStart = t;  // (not accounting for frame time here)
      vm_sound_6.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ vm_sound_6.play(); });  // screen flip
      vm_sound_6.status = PsychoJS.Status.STARTED;
    }
    if (t >= (vm_sound_6.getDuration() + vm_sound_6.tStart)     && vm_sound_6.status === PsychoJS.Status.STARTED) {
      vm_sound_6.stop();  // stop the sound (if longer than duration)
      vm_sound_6.status = PsychoJS.Status.FINISHED;
    }
    // start/stop vm_sound_7
    if ((neverPlay) && vm_sound_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vm_sound_7.tStart = t;  // (not accounting for frame time here)
      vm_sound_7.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ vm_sound_7.play(); });  // screen flip
      vm_sound_7.status = PsychoJS.Status.STARTED;
    }
    if (t >= (vm_sound_7.getDuration() + vm_sound_7.tStart)     && vm_sound_7.status === PsychoJS.Status.STARTED) {
      vm_sound_7.stop();  // stop the sound (if longer than duration)
      vm_sound_7.status = PsychoJS.Status.FINISHED;
    }
    // start/stop vm_sound_8
    if ((neverPlay) && vm_sound_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vm_sound_8.tStart = t;  // (not accounting for frame time here)
      vm_sound_8.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ vm_sound_8.play(); });  // screen flip
      vm_sound_8.status = PsychoJS.Status.STARTED;
    }
    if (t >= (vm_sound_8.getDuration() + vm_sound_8.tStart)     && vm_sound_8.status === PsychoJS.Status.STARTED) {
      vm_sound_8.stop();  // stop the sound (if longer than duration)
      vm_sound_8.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    voice_memorisationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function voice_memorisationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'voice_memorisation' ---
    voice_memorisationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('voice_memorisation.stopped', globalClock.getTime());
    psychoJS.experiment.addData('vm_btn.numClicks', vm_btn.numClicks);
    psychoJS.experiment.addData('vm_btn.timesOn', vm_btn.timesOn);
    psychoJS.experiment.addData('vm_btn.timesOff', vm_btn.timesOff);
    vm_sound_1.stop();  // ensure sound has stopped at end of Routine
    vm_sound_2.stop();  // ensure sound has stopped at end of Routine
    vm_sound_3.stop();  // ensure sound has stopped at end of Routine
    vm_sound_4.stop();  // ensure sound has stopped at end of Routine
    vm_sound_5.stop();  // ensure sound has stopped at end of Routine
    vm_sound_6.stop();  // ensure sound has stopped at end of Routine
    vm_sound_7.stop();  // ensure sound has stopped at end of Routine
    vm_sound_8.stop();  // ensure sound has stopped at end of Routine
    // the Routine "voice_memorisation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var voice_task_introMaxDurationReached;
var voice_task_introMaxDuration;
var voice_task_introComponents;
function voice_task_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'voice_task_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    voice_task_introClock.reset();
    routineTimer.reset();
    voice_task_introMaxDurationReached = false;
    // update component parameters for each repeat
    // reset vti_btn to account for continued clicks & clear times on/off
    vti_btn.reset()
    psychoJS.experiment.addData('voice_task_intro.started', globalClock.getTime());
    voice_task_introMaxDuration = null
    // keep track of which components have finished
    voice_task_introComponents = [];
    voice_task_introComponents.push(vti_text);
    voice_task_introComponents.push(vti_btn);
    
    voice_task_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function voice_task_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'voice_task_intro' ---
    // get current time
    t = voice_task_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *vti_text* updates
    if (t >= 0.0 && vti_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vti_text.tStart = t;  // (not accounting for frame time here)
      vti_text.frameNStart = frameN;  // exact frame index
      
      vti_text.setAutoDraw(true);
    }
    
    
    // *vti_btn* updates
    if (t >= 0 && vti_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vti_btn.tStart = t;  // (not accounting for frame time here)
      vti_btn.frameNStart = frameN;  // exact frame index
      
      vti_btn.setAutoDraw(true);
    }
    
    if (vti_btn.status === PsychoJS.Status.STARTED) {
      // check whether vti_btn has been pressed
      if (vti_btn.isClicked) {
        if (!vti_btn.wasClicked) {
          // store time of first click
          vti_btn.timesOn.push(vti_btn.clock.getTime());
          // store time clicked until
          vti_btn.timesOff.push(vti_btn.clock.getTime());
        } else {
          // update time clicked until;
          vti_btn.timesOff[vti_btn.timesOff.length - 1] = vti_btn.clock.getTime();
        }
        if (!vti_btn.wasClicked) {
          // end routine when vti_btn is clicked
          continueRoutine = false;
          
        }
        // if vti_btn is still clicked next frame, it is not a new click
        vti_btn.wasClicked = true;
      } else {
        // if vti_btn is clicked next frame, it is a new click
        vti_btn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if vti_btn hasn't started / has finished
      vti_btn.clock.reset();
      // if vti_btn is clicked next frame, it is a new click
      vti_btn.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    voice_task_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function voice_task_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'voice_task_intro' ---
    voice_task_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('voice_task_intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('vti_btn.numClicks', vti_btn.numClicks);
    psychoJS.experiment.addData('vti_btn.timesOn', vti_btn.timesOn);
    psychoJS.experiment.addData('vti_btn.timesOff', vti_btn.timesOff);
    // the Routine "voice_task_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var voice_task_loadMaxDurationReached;
var voice_task_loadMaxDuration;
var voice_task_loadComponents;
function voice_task_loadRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'voice_task_load' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    voice_task_loadClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    voice_task_loadMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('voice_task_load.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !(debug);
    maxDurationReached = false
    voice_task_loadMaxDuration = null
    // keep track of which components have finished
    voice_task_loadComponents = [];
    voice_task_loadComponents.push(vtl_text);
    
    voice_task_loadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function voice_task_loadRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'voice_task_load' ---
    // get current time
    t = voice_task_loadClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *vtl_text* updates
    if (t >= 0.0 && vtl_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vtl_text.tStart = t;  // (not accounting for frame time here)
      vtl_text.frameNStart = frameN;  // exact frame index
      
      vtl_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (vtl_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vtl_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    voice_task_loadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function voice_task_loadRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'voice_task_load' ---
    voice_task_loadComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('voice_task_load.stopped', globalClock.getTime());
    if (voice_task_loadMaxDurationReached) {
        voice_task_loadClock.add(voice_task_loadMaxDuration);
    } else {
        voice_task_loadClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var voice_taskMaxDurationReached;
var respKey;
var vt_respCorrect;
var _vt_key_allKeys;
var voice_taskMaxDuration;
var voice_taskComponents;
function voice_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'voice_task' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    voice_taskClock.reset();
    routineTimer.reset();
    voice_taskMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    respKey = null;
    vt_respCorrect = null;
    
    vt_sound.setValue(vt_soundfile);
    vt_sound.setVolume(1.0);
    vt_key.keys = undefined;
    vt_key.rt = undefined;
    _vt_key_allKeys = [];
    psychoJS.experiment.addData('voice_task.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !(debug);
    maxDurationReached = false
    voice_taskMaxDuration = null
    // keep track of which components have finished
    voice_taskComponents = [];
    voice_taskComponents.push(vt_text);
    voice_taskComponents.push(vt_sound);
    voice_taskComponents.push(vt_key);
    
    voice_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function voice_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'voice_task' ---
    // get current time
    t = voice_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *vt_text* updates
    if (t >= 0.0 && vt_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vt_text.tStart = t;  // (not accounting for frame time here)
      vt_text.frameNStart = frameN;  // exact frame index
      
      vt_text.setAutoDraw(true);
    }
    
    // start/stop vt_sound
    if (t >= 0.1 && vt_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vt_sound.tStart = t;  // (not accounting for frame time here)
      vt_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ vt_sound.play(); });  // screen flip
      vt_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (vt_sound.getDuration() + vt_sound.tStart)     && vt_sound.status === PsychoJS.Status.STARTED) {
      vt_sound.stop();  // stop the sound (if longer than duration)
      vt_sound.status = PsychoJS.Status.FINISHED;
    }
    
    // *vt_key* updates
    if (t >= 0.5 && vt_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vt_key.tStart = t;  // (not accounting for frame time here)
      vt_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { vt_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { vt_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { vt_key.clearEvents(); });
    }
    
    if (vt_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = vt_key.getKeys({keyList: ['z', 'm'], waitRelease: true});
      _vt_key_allKeys = _vt_key_allKeys.concat(theseKeys);
      if (_vt_key_allKeys.length > 0) {
        vt_key.keys = _vt_key_allKeys[_vt_key_allKeys.length - 1].name;  // just the last key pressed
        vt_key.rt = _vt_key_allKeys[_vt_key_allKeys.length - 1].rt;
        vt_key.duration = _vt_key_allKeys[_vt_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    voice_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function voice_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'voice_task' ---
    voice_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('voice_task.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_3
    if (vt_key.keys) {
        respKey = vt_key.keys[0];
        if ((((respKey === "z") && (vt_type === "old")) || ((respKey === "m") && (vt_type === "new")))) {
            vt_respCorrect = 1;
        } else {
            vt_respCorrect = 0;
        }
    }
    vt_totalTrials += 1;
    if ((vt_respCorrect === 1)) {
        vt_totalCorrect += 1;
    }
    
    vt_sound.stop();  // ensure sound has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(vt_key.corr, level);
    }
    psychoJS.experiment.addData('vt_key.keys', vt_key.keys);
    if (typeof vt_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('vt_key.rt', vt_key.rt);
        psychoJS.experiment.addData('vt_key.duration', vt_key.duration);
        routineTimer.reset();
        }
    
    vt_key.stop();
    // the Routine "voice_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var voice_feedbackMaxDurationReached;
var accuracy_percent;
var voice_feedbackMaxDuration;
var voice_feedbackComponents;
function voice_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'voice_feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    voice_feedbackClock.reset();
    routineTimer.reset();
    voice_feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    accuracy_percent = ((vt_totalCorrect / vt_totalTrials) * 100);
    vf_text.text = `Your accuracy for the voices was ${util.pad(Number.parseFloat(accuracy_percent).toFixed(1), 1)}%
    As an indication, the general population accuracy for this type of sound is 78.8 %
    
    Click 'Next' to continue`
    ;
    
    // reset vf_btn to account for continued clicks & clear times on/off
    vf_btn.reset()
    psychoJS.experiment.addData('voice_feedback.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !(debug);
    maxDurationReached = false
    voice_feedbackMaxDuration = null
    // keep track of which components have finished
    voice_feedbackComponents = [];
    voice_feedbackComponents.push(vf_text);
    voice_feedbackComponents.push(vf_btn);
    
    voice_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function voice_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'voice_feedback' ---
    // get current time
    t = voice_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *vf_text* updates
    if (t >= 0.0 && vf_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vf_text.tStart = t;  // (not accounting for frame time here)
      vf_text.frameNStart = frameN;  // exact frame index
      
      vf_text.setAutoDraw(true);
    }
    
    
    // *vf_btn* updates
    if (t >= 0 && vf_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vf_btn.tStart = t;  // (not accounting for frame time here)
      vf_btn.frameNStart = frameN;  // exact frame index
      
      vf_btn.setAutoDraw(true);
    }
    
    if (vf_btn.status === PsychoJS.Status.STARTED) {
      // check whether vf_btn has been pressed
      if (vf_btn.isClicked) {
        if (!vf_btn.wasClicked) {
          // store time of first click
          vf_btn.timesOn.push(vf_btn.clock.getTime());
          // store time clicked until
          vf_btn.timesOff.push(vf_btn.clock.getTime());
        } else {
          // update time clicked until;
          vf_btn.timesOff[vf_btn.timesOff.length - 1] = vf_btn.clock.getTime();
        }
        if (!vf_btn.wasClicked) {
          // end routine when vf_btn is clicked
          continueRoutine = false;
          
        }
        // if vf_btn is still clicked next frame, it is not a new click
        vf_btn.wasClicked = true;
      } else {
        // if vf_btn is clicked next frame, it is a new click
        vf_btn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if vf_btn hasn't started / has finished
      vf_btn.clock.reset();
      // if vf_btn is clicked next frame, it is a new click
      vf_btn.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    voice_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function voice_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'voice_feedback' ---
    voice_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('voice_feedback.stopped', globalClock.getTime());
    psychoJS.experiment.addData('vf_btn.numClicks', vf_btn.numClicks);
    psychoJS.experiment.addData('vf_btn.timesOn', vf_btn.timesOn);
    psychoJS.experiment.addData('vf_btn.timesOff', vf_btn.timesOff);
    // the Routine "voice_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var bells_memorisationMaxDurationReached;
var bells_memorisationMaxDuration;
var bells_memorisationComponents;
function bells_memorisationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bells_memorisation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    bells_memorisationClock.reset();
    routineTimer.reset();
    bells_memorisationMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    bm_text.setText(bm_text_content);
    
    sounds = [bm_sound_1, bm_sound_2, bm_sound_3, bm_sound_4, bm_sound_5, bm_sound_6, bm_sound_7, bm_sound_8];
    currentSoundIndex = 0;
    playCount = 0;
    isPlaying = false;
    nextPlayTime = 0;
    labelSet = false;  // flag to track whether we've updated the button text
    
    // reset bm_btn to account for continued clicks & clear times on/off
    bm_btn.reset()
    bm_sound_1.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID01.wav');
    bm_sound_1.setVolume(1.0);
    bm_sound_2.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID02.wav');
    bm_sound_2.setVolume(1.0);
    bm_sound_3.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID03.wav');
    bm_sound_3.setVolume(1.0);
    bm_sound_4.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID04.wav');
    bm_sound_4.setVolume(1.0);
    bm_sound_5.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID05.wav');
    bm_sound_5.setVolume(1.0);
    bm_sound_6.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID06.wav');
    bm_sound_6.setVolume(1.0);
    bm_sound_7.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID07.wav');
    bm_sound_7.setVolume(1.0);
    bm_sound_8.setValue('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Bell_Old_ID08.wav');
    bm_sound_8.setVolume(1.0);
    psychoJS.experiment.addData('bells_memorisation.started', globalClock.getTime());
    bells_memorisationMaxDuration = null
    // keep track of which components have finished
    bells_memorisationComponents = [];
    bells_memorisationComponents.push(bm_text);
    bells_memorisationComponents.push(bm_btn);
    bells_memorisationComponents.push(bm_sound_1);
    bells_memorisationComponents.push(bm_sound_2);
    bells_memorisationComponents.push(bm_sound_3);
    bells_memorisationComponents.push(bm_sound_4);
    bells_memorisationComponents.push(bm_sound_5);
    bells_memorisationComponents.push(bm_sound_6);
    bells_memorisationComponents.push(bm_sound_7);
    bells_memorisationComponents.push(bm_sound_8);
    
    bells_memorisationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function bells_memorisationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bells_memorisation' ---
    // get current time
    t = bells_memorisationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bm_text* updates
    if (t >= 0.0 && bm_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bm_text.tStart = t;  // (not accounting for frame time here)
      bm_text.frameNStart = frameN;  // exact frame index
      
      bm_text.setAutoDraw(true);
    }
    
    if (bm_auto_proceed === 1) {
        continueRoutine = false;
        }
    
    if (!labelSet) {
        bm_btn.text = bm_btn_content;   // update ButtonStim text
        bm_btn.setAutoDraw(true);        // make sure it's visible
        labelSet = true;                 // prevent re-running every frame
    }
    
    if (bm_playSound) {
        bm_btn.setAutoDraw(false);  // stop drawing & interaction
    } else {
        bm_btn.setAutoDraw(true);   // show & clickable
    }
    
    if (bm_playSound && currentSoundIndex < sounds.length) {
        let snd = sounds[currentSoundIndex];
    
        if (!isPlaying && t >= nextPlayTime) {
            snd.play();
            isPlaying = true;
            soundStart = t;  // mark when it started
        }
    
        if (isPlaying) {
            let elapsed = t - soundStart;
            if (elapsed >= snd.getDuration()) {
                playCount += 1;
                isPlaying = false;
                nextPlayTime = t + 0.1;  // add buffer
                if (currentSoundIndex === 0) {
                    if (playCount >= 4) {
                        playCount = 0;
                        currentSoundIndex += 1;
                    }
                }
                if (currentSoundIndex > 0) {
                    if (playCount >= 3) {
                        playCount = 0;
                        currentSoundIndex += 1;
                    }
                }
            }
        }
    
        if (currentSoundIndex >= sounds.length) {
            continueRoutine = false;
        }
    }
    
    // *bm_btn* updates
    if (t >= 0 && bm_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bm_btn.tStart = t;  // (not accounting for frame time here)
      bm_btn.frameNStart = frameN;  // exact frame index
      
      bm_btn.setAutoDraw(true);
    }
    
    if (bm_btn.status === PsychoJS.Status.STARTED) {
      // check whether bm_btn has been pressed
      if (bm_btn.isClicked) {
        if (!bm_btn.wasClicked) {
          // store time of first click
          bm_btn.timesOn.push(bm_btn.clock.getTime());
          // store time clicked until
          bm_btn.timesOff.push(bm_btn.clock.getTime());
        } else {
          // update time clicked until;
          bm_btn.timesOff[bm_btn.timesOff.length - 1] = bm_btn.clock.getTime();
        }
        if (!bm_btn.wasClicked) {
          // end routine when bm_btn is clicked
          continueRoutine = false;
          
        }
        // if bm_btn is still clicked next frame, it is not a new click
        bm_btn.wasClicked = true;
      } else {
        // if bm_btn is clicked next frame, it is a new click
        bm_btn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if bm_btn hasn't started / has finished
      bm_btn.clock.reset();
      // if bm_btn is clicked next frame, it is a new click
      bm_btn.wasClicked = false;
    }
    // start/stop bm_sound_1
    if ((neverPlay) && bm_sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bm_sound_1.tStart = t;  // (not accounting for frame time here)
      bm_sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ bm_sound_1.play(); });  // screen flip
      bm_sound_1.status = PsychoJS.Status.STARTED;
    }
    if (t >= (bm_sound_1.getDuration() + bm_sound_1.tStart)     && bm_sound_1.status === PsychoJS.Status.STARTED) {
      bm_sound_1.stop();  // stop the sound (if longer than duration)
      bm_sound_1.status = PsychoJS.Status.FINISHED;
    }
    // start/stop bm_sound_2
    if ((neverPlay) && bm_sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bm_sound_2.tStart = t;  // (not accounting for frame time here)
      bm_sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ bm_sound_2.play(); });  // screen flip
      bm_sound_2.status = PsychoJS.Status.STARTED;
    }
    if (t >= (bm_sound_2.getDuration() + bm_sound_2.tStart)     && bm_sound_2.status === PsychoJS.Status.STARTED) {
      bm_sound_2.stop();  // stop the sound (if longer than duration)
      bm_sound_2.status = PsychoJS.Status.FINISHED;
    }
    // start/stop bm_sound_3
    if ((neverPlay) && bm_sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bm_sound_3.tStart = t;  // (not accounting for frame time here)
      bm_sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ bm_sound_3.play(); });  // screen flip
      bm_sound_3.status = PsychoJS.Status.STARTED;
    }
    if (t >= (bm_sound_3.getDuration() + bm_sound_3.tStart)     && bm_sound_3.status === PsychoJS.Status.STARTED) {
      bm_sound_3.stop();  // stop the sound (if longer than duration)
      bm_sound_3.status = PsychoJS.Status.FINISHED;
    }
    // start/stop bm_sound_4
    if ((neverPlay) && bm_sound_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bm_sound_4.tStart = t;  // (not accounting for frame time here)
      bm_sound_4.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ bm_sound_4.play(); });  // screen flip
      bm_sound_4.status = PsychoJS.Status.STARTED;
    }
    if (t >= (bm_sound_4.getDuration() + bm_sound_4.tStart)     && bm_sound_4.status === PsychoJS.Status.STARTED) {
      bm_sound_4.stop();  // stop the sound (if longer than duration)
      bm_sound_4.status = PsychoJS.Status.FINISHED;
    }
    // start/stop bm_sound_5
    if ((neverPlay) && bm_sound_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bm_sound_5.tStart = t;  // (not accounting for frame time here)
      bm_sound_5.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ bm_sound_5.play(); });  // screen flip
      bm_sound_5.status = PsychoJS.Status.STARTED;
    }
    if (t >= (bm_sound_5.getDuration() + bm_sound_5.tStart)     && bm_sound_5.status === PsychoJS.Status.STARTED) {
      bm_sound_5.stop();  // stop the sound (if longer than duration)
      bm_sound_5.status = PsychoJS.Status.FINISHED;
    }
    // start/stop bm_sound_6
    if ((neverPlay) && bm_sound_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bm_sound_6.tStart = t;  // (not accounting for frame time here)
      bm_sound_6.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ bm_sound_6.play(); });  // screen flip
      bm_sound_6.status = PsychoJS.Status.STARTED;
    }
    if (t >= (bm_sound_6.getDuration() + bm_sound_6.tStart)     && bm_sound_6.status === PsychoJS.Status.STARTED) {
      bm_sound_6.stop();  // stop the sound (if longer than duration)
      bm_sound_6.status = PsychoJS.Status.FINISHED;
    }
    // start/stop bm_sound_7
    if ((neverPlay) && bm_sound_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bm_sound_7.tStart = t;  // (not accounting for frame time here)
      bm_sound_7.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ bm_sound_7.play(); });  // screen flip
      bm_sound_7.status = PsychoJS.Status.STARTED;
    }
    if (t >= (bm_sound_7.getDuration() + bm_sound_7.tStart)     && bm_sound_7.status === PsychoJS.Status.STARTED) {
      bm_sound_7.stop();  // stop the sound (if longer than duration)
      bm_sound_7.status = PsychoJS.Status.FINISHED;
    }
    // start/stop bm_sound_8
    if ((neverPlay) && bm_sound_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bm_sound_8.tStart = t;  // (not accounting for frame time here)
      bm_sound_8.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ bm_sound_8.play(); });  // screen flip
      bm_sound_8.status = PsychoJS.Status.STARTED;
    }
    if (t >= (bm_sound_8.getDuration() + bm_sound_8.tStart)     && bm_sound_8.status === PsychoJS.Status.STARTED) {
      bm_sound_8.stop();  // stop the sound (if longer than duration)
      bm_sound_8.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    bells_memorisationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function bells_memorisationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bells_memorisation' ---
    bells_memorisationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('bells_memorisation.stopped', globalClock.getTime());
    psychoJS.experiment.addData('bm_btn.numClicks', bm_btn.numClicks);
    psychoJS.experiment.addData('bm_btn.timesOn', bm_btn.timesOn);
    psychoJS.experiment.addData('bm_btn.timesOff', bm_btn.timesOff);
    bm_sound_1.stop();  // ensure sound has stopped at end of Routine
    bm_sound_2.stop();  // ensure sound has stopped at end of Routine
    bm_sound_3.stop();  // ensure sound has stopped at end of Routine
    bm_sound_4.stop();  // ensure sound has stopped at end of Routine
    bm_sound_5.stop();  // ensure sound has stopped at end of Routine
    bm_sound_6.stop();  // ensure sound has stopped at end of Routine
    bm_sound_7.stop();  // ensure sound has stopped at end of Routine
    bm_sound_8.stop();  // ensure sound has stopped at end of Routine
    // the Routine "bells_memorisation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var bells_task_introMaxDurationReached;
var bells_task_introMaxDuration;
var bells_task_introComponents;
function bells_task_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bells_task_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    bells_task_introClock.reset();
    routineTimer.reset();
    bells_task_introMaxDurationReached = false;
    // update component parameters for each repeat
    // reset bti_btn to account for continued clicks & clear times on/off
    bti_btn.reset()
    psychoJS.experiment.addData('bells_task_intro.started', globalClock.getTime());
    bells_task_introMaxDuration = null
    // keep track of which components have finished
    bells_task_introComponents = [];
    bells_task_introComponents.push(bti_text);
    bells_task_introComponents.push(bti_btn);
    
    bells_task_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function bells_task_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bells_task_intro' ---
    // get current time
    t = bells_task_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bti_text* updates
    if (t >= 0.0 && bti_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bti_text.tStart = t;  // (not accounting for frame time here)
      bti_text.frameNStart = frameN;  // exact frame index
      
      bti_text.setAutoDraw(true);
    }
    
    
    // *bti_btn* updates
    if (t >= 0 && bti_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bti_btn.tStart = t;  // (not accounting for frame time here)
      bti_btn.frameNStart = frameN;  // exact frame index
      
      bti_btn.setAutoDraw(true);
    }
    
    if (bti_btn.status === PsychoJS.Status.STARTED) {
      // check whether bti_btn has been pressed
      if (bti_btn.isClicked) {
        if (!bti_btn.wasClicked) {
          // store time of first click
          bti_btn.timesOn.push(bti_btn.clock.getTime());
          // store time clicked until
          bti_btn.timesOff.push(bti_btn.clock.getTime());
        } else {
          // update time clicked until;
          bti_btn.timesOff[bti_btn.timesOff.length - 1] = bti_btn.clock.getTime();
        }
        if (!bti_btn.wasClicked) {
          // end routine when bti_btn is clicked
          continueRoutine = false;
          
        }
        // if bti_btn is still clicked next frame, it is not a new click
        bti_btn.wasClicked = true;
      } else {
        // if bti_btn is clicked next frame, it is a new click
        bti_btn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if bti_btn hasn't started / has finished
      bti_btn.clock.reset();
      // if bti_btn is clicked next frame, it is a new click
      bti_btn.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    bells_task_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function bells_task_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bells_task_intro' ---
    bells_task_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('bells_task_intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('bti_btn.numClicks', bti_btn.numClicks);
    psychoJS.experiment.addData('bti_btn.timesOn', bti_btn.timesOn);
    psychoJS.experiment.addData('bti_btn.timesOff', bti_btn.timesOff);
    // the Routine "bells_task_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var bells_task_loadMaxDurationReached;
var bells_task_loadMaxDuration;
var bells_task_loadComponents;
function bells_task_loadRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bells_task_load' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    bells_task_loadClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    bells_task_loadMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('bells_task_load.started', globalClock.getTime());
    bells_task_loadMaxDuration = null
    // keep track of which components have finished
    bells_task_loadComponents = [];
    bells_task_loadComponents.push(btl_text);
    
    bells_task_loadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function bells_task_loadRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bells_task_load' ---
    // get current time
    t = bells_task_loadClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *btl_text* updates
    if (t >= 0.0 && btl_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btl_text.tStart = t;  // (not accounting for frame time here)
      btl_text.frameNStart = frameN;  // exact frame index
      
      btl_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (btl_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      btl_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    bells_task_loadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function bells_task_loadRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bells_task_load' ---
    bells_task_loadComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('bells_task_load.stopped', globalClock.getTime());
    if (bells_task_loadMaxDurationReached) {
        bells_task_loadClock.add(bells_task_loadMaxDuration);
    } else {
        bells_task_loadClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var bells_taskMaxDurationReached;
var bt_respCorrect;
var _bt_key_allKeys;
var bells_taskMaxDuration;
var bells_taskComponents;
function bells_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bells_task' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    bells_taskClock.reset();
    routineTimer.reset();
    bells_taskMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    respKey = null;
    bt_respCorrect = null;
    
    bt_sound.setValue(bt_soundfile);
    bt_sound.setVolume(1.0);
    bt_key.keys = undefined;
    bt_key.rt = undefined;
    _bt_key_allKeys = [];
    psychoJS.experiment.addData('bells_task.started', globalClock.getTime());
    bells_taskMaxDuration = null
    // keep track of which components have finished
    bells_taskComponents = [];
    bells_taskComponents.push(bt_text);
    bells_taskComponents.push(bt_sound);
    bells_taskComponents.push(bt_key);
    
    bells_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function bells_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bells_task' ---
    // get current time
    t = bells_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bt_text* updates
    if (t >= 0.0 && bt_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bt_text.tStart = t;  // (not accounting for frame time here)
      bt_text.frameNStart = frameN;  // exact frame index
      
      bt_text.setAutoDraw(true);
    }
    
    // start/stop bt_sound
    if (t >= 0.1 && bt_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bt_sound.tStart = t;  // (not accounting for frame time here)
      bt_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ bt_sound.play(); });  // screen flip
      bt_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (bt_sound.getDuration() + bt_sound.tStart)     && bt_sound.status === PsychoJS.Status.STARTED) {
      bt_sound.stop();  // stop the sound (if longer than duration)
      bt_sound.status = PsychoJS.Status.FINISHED;
    }
    
    // *bt_key* updates
    if (t >= 0.5 && bt_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bt_key.tStart = t;  // (not accounting for frame time here)
      bt_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { bt_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { bt_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { bt_key.clearEvents(); });
    }
    
    if (bt_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = bt_key.getKeys({keyList: ['z', 'm'], waitRelease: true});
      _bt_key_allKeys = _bt_key_allKeys.concat(theseKeys);
      if (_bt_key_allKeys.length > 0) {
        bt_key.keys = _bt_key_allKeys[_bt_key_allKeys.length - 1].name;  // just the last key pressed
        bt_key.rt = _bt_key_allKeys[_bt_key_allKeys.length - 1].rt;
        bt_key.duration = _bt_key_allKeys[_bt_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    bells_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function bells_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bells_task' ---
    bells_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('bells_task.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_6
    if (bt_key.keys) {
        respKey = bt_key.keys[0];
        if ((((respKey === "z") && (bt_type === "old")) || ((respKey === "m") && (bt_type === "new")))) {
            bt_respCorrect = 1;
        } else {
            bt_respCorrect = 0;
        }
    }
    bt_totalTrials += 1;
    if ((bt_respCorrect === 1)) {
        bt_totalCorrect += 1;
    }
    
    bt_sound.stop();  // ensure sound has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(bt_key.corr, level);
    }
    psychoJS.experiment.addData('bt_key.keys', bt_key.keys);
    if (typeof bt_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('bt_key.rt', bt_key.rt);
        psychoJS.experiment.addData('bt_key.duration', bt_key.duration);
        routineTimer.reset();
        }
    
    bt_key.stop();
    // the Routine "bells_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var bells_feedbackMaxDurationReached;
var bells_feedbackMaxDuration;
var bells_feedbackComponents;
function bells_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bells_feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    bells_feedbackClock.reset();
    routineTimer.reset();
    bells_feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_7
    accuracy_percent = ((bt_totalCorrect / bt_totalTrials) * 100);
    bf_text.text = `Your accuracy for the bells was ${util.pad(Number.parseFloat(accuracy_percent).toFixed(1), 1)}%
    As an indication, the general population accuracy for this type of sound is 85.6 %
    
    Click 'Next' to continue`
    ;
    
    // reset bf_btn to account for continued clicks & clear times on/off
    bf_btn.reset()
    psychoJS.experiment.addData('bells_feedback.started', globalClock.getTime());
    bells_feedbackMaxDuration = null
    // keep track of which components have finished
    bells_feedbackComponents = [];
    bells_feedbackComponents.push(bf_text);
    bells_feedbackComponents.push(bf_btn);
    
    bells_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function bells_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bells_feedback' ---
    // get current time
    t = bells_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bf_text* updates
    if (t >= 0.0 && bf_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bf_text.tStart = t;  // (not accounting for frame time here)
      bf_text.frameNStart = frameN;  // exact frame index
      
      bf_text.setAutoDraw(true);
    }
    
    
    // *bf_btn* updates
    if (t >= 0 && bf_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bf_btn.tStart = t;  // (not accounting for frame time here)
      bf_btn.frameNStart = frameN;  // exact frame index
      
      bf_btn.setAutoDraw(true);
    }
    
    if (bf_btn.status === PsychoJS.Status.STARTED) {
      // check whether bf_btn has been pressed
      if (bf_btn.isClicked) {
        if (!bf_btn.wasClicked) {
          // store time of first click
          bf_btn.timesOn.push(bf_btn.clock.getTime());
          // store time clicked until
          bf_btn.timesOff.push(bf_btn.clock.getTime());
        } else {
          // update time clicked until;
          bf_btn.timesOff[bf_btn.timesOff.length - 1] = bf_btn.clock.getTime();
        }
        if (!bf_btn.wasClicked) {
          // end routine when bf_btn is clicked
          continueRoutine = false;
          
        }
        // if bf_btn is still clicked next frame, it is not a new click
        bf_btn.wasClicked = true;
      } else {
        // if bf_btn is clicked next frame, it is a new click
        bf_btn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if bf_btn hasn't started / has finished
      bf_btn.clock.reset();
      // if bf_btn is clicked next frame, it is a new click
      bf_btn.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    bells_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function bells_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bells_feedback' ---
    bells_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('bells_feedback.stopped', globalClock.getTime());
    psychoJS.experiment.addData('bf_btn.numClicks', bf_btn.numClicks);
    psychoJS.experiment.addData('bf_btn.timesOn', bf_btn.timesOn);
    psychoJS.experiment.addData('bf_btn.timesOff', bf_btn.timesOff);
    // the Routine "bells_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finishMaxDurationReached;
var finishMaxDuration;
var finishComponents;
function finishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finish' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    finishClock.reset();
    routineTimer.reset();
    finishMaxDurationReached = false;
    // update component parameters for each repeat
    // reset fin_btn to account for continued clicks & clear times on/off
    fin_btn.reset()
    psychoJS.experiment.addData('finish.started', globalClock.getTime());
    finishMaxDuration = null
    // keep track of which components have finished
    finishComponents = [];
    finishComponents.push(fin_text);
    finishComponents.push(fin_btn);
    
    finishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function finishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finish' ---
    // get current time
    t = finishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fin_text* updates
    if (t >= 0.0 && fin_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fin_text.tStart = t;  // (not accounting for frame time here)
      fin_text.frameNStart = frameN;  // exact frame index
      
      fin_text.setAutoDraw(true);
    }
    
    
    // *fin_btn* updates
    if (t >= 0 && fin_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fin_btn.tStart = t;  // (not accounting for frame time here)
      fin_btn.frameNStart = frameN;  // exact frame index
      
      fin_btn.setAutoDraw(true);
    }
    
    if (fin_btn.status === PsychoJS.Status.STARTED) {
      // check whether fin_btn has been pressed
      if (fin_btn.isClicked) {
        if (!fin_btn.wasClicked) {
          // store time of first click
          fin_btn.timesOn.push(fin_btn.clock.getTime());
          // store time clicked until
          fin_btn.timesOff.push(fin_btn.clock.getTime());
        } else {
          // update time clicked until;
          fin_btn.timesOff[fin_btn.timesOff.length - 1] = fin_btn.clock.getTime();
        }
        if (!fin_btn.wasClicked) {
          // end routine when fin_btn is clicked
          continueRoutine = false;
          
        }
        // if fin_btn is still clicked next frame, it is not a new click
        fin_btn.wasClicked = true;
      } else {
        // if fin_btn is clicked next frame, it is a new click
        fin_btn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if fin_btn hasn't started / has finished
      fin_btn.clock.reset();
      // if fin_btn is clicked next frame, it is a new click
      fin_btn.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    finishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finish' ---
    finishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('finish.stopped', globalClock.getTime());
    psychoJS.experiment.addData('fin_btn.numClicks', fin_btn.numClicks);
    psychoJS.experiment.addData('fin_btn.timesOn', fin_btn.timesOn);
    psychoJS.experiment.addData('fin_btn.timesOff', fin_btn.timesOff);
    // the Routine "finish" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
