#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.2.4),
    on Wed  3 Sep 14:36:16 2025
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.2.4'
expName = 'GVMT'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1470, 956]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/ivorym/Documents/Research/PoP/1.5_crossmodal/Glasgow_Voice_Memory_Test/GVMT_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('info')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=True, allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    # Setup iohub experiment
    ioConfig['Experiment'] = dict(filename=thisExp.dataFileName)
    
    # Start ioHub server
    ioServer = io.launchHubServer(window=win, **ioConfig)
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    # create speaker 'st_sound'
    deviceManager.addDevice(
        deviceName='st_sound',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'vm_sound_1'
    deviceManager.addDevice(
        deviceName='vm_sound_1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'vm_sound_2'
    deviceManager.addDevice(
        deviceName='vm_sound_2',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'vm_sound_3'
    deviceManager.addDevice(
        deviceName='vm_sound_3',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'vm_sound_4'
    deviceManager.addDevice(
        deviceName='vm_sound_4',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'vm_sound_5'
    deviceManager.addDevice(
        deviceName='vm_sound_5',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'vm_sound_6'
    deviceManager.addDevice(
        deviceName='vm_sound_6',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'vm_sound_7'
    deviceManager.addDevice(
        deviceName='vm_sound_7',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'vm_sound_8'
    deviceManager.addDevice(
        deviceName='vm_sound_8',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'vt_sound'
    deviceManager.addDevice(
        deviceName='vt_sound',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('vt_key') is None:
        # initialise vt_key
        vt_key = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='vt_key',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='ioHub',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ioHub'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "introduction" ---
    text = visual.TextStim(win=win, name='text',
        text='Welcome to the Glasgow Voice Memory Test\n\nYour task is to listen to a series of eight voices and try to remember them.\nThis will be followed by another series of voices that will test your memory. For each one of those new voices, you will have to indicate if it belongs to the first series you have been trying to remember.\nThis will be repeated for ringing bells.',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    int_btn = visual.ButtonStim(win, 
        text='NEXT', font='Arvo',
        pos=(0, -0.4),
        letterHeight=0.03,
        size=(0.25, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='int_btn',
        depth=-1
    )
    int_btn.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "sound_test" ---
    st_text = visual.TextStim(win=win, name='st_text',
        text="Let's first check if your sound device works properly\n\nA sound will be played after you click the button below. You can replay the sound as many times as you wish\n\nPlease adjust the volume of your device at a comfortable level.",
        font='Arial',
        pos=(0, 0), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    st_play_btn = visual.ButtonStim(win, 
        text='Test Sound', font='Arvo',
        pos=(0, -0.25),
        letterHeight=0.03,
        size=(0.25, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='st_play_btn',
        depth=-1
    )
    st_play_btn.buttonClock = core.Clock()
    st_cont_btn = visual.ButtonStim(win, 
        text='Continue', font='Arvo',
        pos=(0, -0.4),
        letterHeight=0.03,
        size=(0.25, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='st_cont_btn',
        depth=-2
    )
    st_cont_btn.buttonClock = core.Clock()
    st_sound = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='st_sound',    name='st_sound'
    )
    st_sound.setVolume(1.0)
    
    # --- Initialize components for Routine "voice_memorisation" ---
    vm_text = visual.TextStim(win=win, name='vm_text',
        text=None,
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    vm_btn = visual.ButtonStim(win, 
        text=None, font='Arvo',
        pos=(0, -0.4),
        letterHeight=0.03,
        size=(0.25, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='vm_btn',
        depth=-2
    )
    vm_btn.buttonClock = core.Clock()
    vm_sound_1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='vm_sound_1',    name='vm_sound_1'
    )
    vm_sound_1.setVolume(1.0)
    vm_sound_2 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='vm_sound_2',    name='vm_sound_2'
    )
    vm_sound_2.setVolume(1.0)
    vm_sound_3 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='vm_sound_3',    name='vm_sound_3'
    )
    vm_sound_3.setVolume(1.0)
    vm_sound_4 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='vm_sound_4',    name='vm_sound_4'
    )
    vm_sound_4.setVolume(1.0)
    vm_sound_5 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='vm_sound_5',    name='vm_sound_5'
    )
    vm_sound_5.setVolume(1.0)
    vm_sound_6 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='vm_sound_6',    name='vm_sound_6'
    )
    vm_sound_6.setVolume(1.0)
    vm_sound_7 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='vm_sound_7',    name='vm_sound_7'
    )
    vm_sound_7.setVolume(1.0)
    vm_sound_8 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='vm_sound_8',    name='vm_sound_8'
    )
    vm_sound_8.setVolume(1.0)
    
    # --- Initialize components for Routine "voice_task_intro" ---
    vti_text = visual.TextStim(win=win, name='vti_text',
        text='Testing instruction\n\nDuring the testing phase, you will listen to "Voice" sounds that are either OLD (sounds that were presented during the familiarization phase) or NEW (sounds that were presented NOT during the familiarization phase).\n\nAfter the playback of a sound press:\n- Press \'z\' if you think this was an OLD sound\n- Press \'m\' if you think this was a NEW sound',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    vti_btn = visual.ButtonStim(win, 
        text='Next', font='Arvo',
        pos=(0, -0.4),
        letterHeight=0.03,
        size=(0.25, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='vti_btn',
        depth=-1
    )
    vti_btn.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "voice_task_load" ---
    vtl_text = visual.TextStim(win=win, name='vtl_text',
        text='Loading...',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "voice_task" ---
    vt_text = visual.TextStim(win=win, name='vt_text',
        text='Is this Voice OLD or NEW?\n\nPress \'z\' for OLD\nPress \'m\' for NEW"',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    # Run 'Begin Experiment' code from code_3
    # Initialize counters
    totalTrials = 0
    totalCorrect = 0
    vt_sound = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='vt_sound',    name='vt_sound'
    )
    vt_sound.setVolume(1.0)
    vt_key = keyboard.Keyboard(deviceName='vt_key')
    
    # --- Initialize components for Routine "voice_feedback" ---
    vf_text = visual.TextStim(win=win, name='vf_text',
        text=None,
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    vf_btn = visual.ButtonStim(win, 
        text='Next', font='Arvo',
        pos=(0, -0.4),
        letterHeight=0.03,
        size=(0.25, 0.1), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='vf_btn',
        depth=-2
    )
    vf_btn.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "bells_instructions" ---
    
    # --- Initialize components for Routine "bells_memorisation" ---
    
    # --- Initialize components for Routine "bells_task" ---
    
    # --- Initialize components for Routine "bells_feedback" ---
    
    # --- Initialize components for Routine "finish" ---
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "introduction" ---
    # create an object to store info about Routine introduction
    introduction = data.Routine(
        name='introduction',
        components=[text, int_btn],
    )
    introduction.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset int_btn to account for continued clicks & clear times on/off
    int_btn.reset()
    # store start times for introduction
    introduction.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    introduction.tStart = globalClock.getTime(format='float')
    introduction.status = STARTED
    thisExp.addData('introduction.started', introduction.tStart)
    introduction.maxDuration = None
    # keep track of which components have finished
    introductionComponents = introduction.components
    for thisComponent in introduction.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "introduction" ---
    introduction.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text.started')
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            pass
        # *int_btn* updates
        
        # if int_btn is starting this frame...
        if int_btn.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            int_btn.frameNStart = frameN  # exact frame index
            int_btn.tStart = t  # local t and not account for scr refresh
            int_btn.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(int_btn, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'int_btn.started')
            # update status
            int_btn.status = STARTED
            win.callOnFlip(int_btn.buttonClock.reset)
            int_btn.setAutoDraw(True)
        
        # if int_btn is active this frame...
        if int_btn.status == STARTED:
            # update params
            pass
            # check whether int_btn has been pressed
            if int_btn.isClicked:
                if not int_btn.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    int_btn.timesOn.append(int_btn.buttonClock.getTime())
                    int_btn.timesOff.append(int_btn.buttonClock.getTime())
                elif len(int_btn.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    int_btn.timesOff[-1] = int_btn.buttonClock.getTime()
                if not int_btn.wasClicked:
                    # end routine when int_btn is clicked
                    continueRoutine = False
                if not int_btn.wasClicked:
                    # run callback code when int_btn is clicked
                    pass
        # take note of whether int_btn was clicked, so that next frame we know if clicks are new
        int_btn.wasClicked = int_btn.isClicked and int_btn.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            introduction.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in introduction.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "introduction" ---
    for thisComponent in introduction.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for introduction
    introduction.tStop = globalClock.getTime(format='float')
    introduction.tStopRefresh = tThisFlipGlobal
    thisExp.addData('introduction.stopped', introduction.tStop)
    thisExp.addData('int_btn.numClicks', int_btn.numClicks)
    if int_btn.numClicks:
       thisExp.addData('int_btn.timesOn', int_btn.timesOn)
       thisExp.addData('int_btn.timesOff', int_btn.timesOff)
    else:
       thisExp.addData('int_btn.timesOn', "")
       thisExp.addData('int_btn.timesOff', "")
    thisExp.nextEntry()
    # the Routine "introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "sound_test" ---
    # create an object to store info about Routine sound_test
    sound_test = data.Routine(
        name='sound_test',
        components=[st_text, st_play_btn, st_cont_btn, st_sound],
    )
    sound_test.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset st_play_btn to account for continued clicks & clear times on/off
    st_play_btn.reset()
    # reset st_cont_btn to account for continued clicks & clear times on/off
    st_cont_btn.reset()
    st_sound.setSound('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/FemaleAverage.wav', hamming=True)
    st_sound.setVolume(1.0, log=False)
    st_sound.seek(0)
    # Run 'Begin Routine' code from code
    st_play_once = False
    st_soundPlaying = False
    
    # store start times for sound_test
    sound_test.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    sound_test.tStart = globalClock.getTime(format='float')
    sound_test.status = STARTED
    thisExp.addData('sound_test.started', sound_test.tStart)
    sound_test.maxDuration = None
    # keep track of which components have finished
    sound_testComponents = sound_test.components
    for thisComponent in sound_test.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "sound_test" ---
    sound_test.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *st_text* updates
        
        # if st_text is starting this frame...
        if st_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            st_text.frameNStart = frameN  # exact frame index
            st_text.tStart = t  # local t and not account for scr refresh
            st_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(st_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'st_text.started')
            # update status
            st_text.status = STARTED
            st_text.setAutoDraw(True)
        
        # if st_text is active this frame...
        if st_text.status == STARTED:
            # update params
            pass
        # *st_play_btn* updates
        
        # if st_play_btn is starting this frame...
        if st_play_btn.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            st_play_btn.frameNStart = frameN  # exact frame index
            st_play_btn.tStart = t  # local t and not account for scr refresh
            st_play_btn.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(st_play_btn, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'st_play_btn.started')
            # update status
            st_play_btn.status = STARTED
            win.callOnFlip(st_play_btn.buttonClock.reset)
            st_play_btn.setAutoDraw(True)
        
        # if st_play_btn is active this frame...
        if st_play_btn.status == STARTED:
            # update params
            pass
            # check whether st_play_btn has been pressed
            if st_play_btn.isClicked:
                if not st_play_btn.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    st_play_btn.timesOn.append(st_play_btn.buttonClock.getTime())
                    st_play_btn.timesOff.append(st_play_btn.buttonClock.getTime())
                elif len(st_play_btn.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    st_play_btn.timesOff[-1] = st_play_btn.buttonClock.getTime()
                if not st_play_btn.wasClicked:
                    # run callback code when st_play_btn is clicked
                    st_play_once = True
        # take note of whether st_play_btn was clicked, so that next frame we know if clicks are new
        st_play_btn.wasClicked = st_play_btn.isClicked and st_play_btn.status == STARTED
        # *st_cont_btn* updates
        
        # if st_cont_btn is starting this frame...
        if st_cont_btn.status == NOT_STARTED and st_play_once:
            # keep track of start time/frame for later
            st_cont_btn.frameNStart = frameN  # exact frame index
            st_cont_btn.tStart = t  # local t and not account for scr refresh
            st_cont_btn.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(st_cont_btn, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'st_cont_btn.started')
            # update status
            st_cont_btn.status = STARTED
            win.callOnFlip(st_cont_btn.buttonClock.reset)
            st_cont_btn.setAutoDraw(True)
        
        # if st_cont_btn is active this frame...
        if st_cont_btn.status == STARTED:
            # update params
            pass
            # check whether st_cont_btn has been pressed
            if st_cont_btn.isClicked:
                if not st_cont_btn.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    st_cont_btn.timesOn.append(st_cont_btn.buttonClock.getTime())
                    st_cont_btn.timesOff.append(st_cont_btn.buttonClock.getTime())
                elif len(st_cont_btn.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    st_cont_btn.timesOff[-1] = st_cont_btn.buttonClock.getTime()
                if not st_cont_btn.wasClicked:
                    # end routine when st_cont_btn is clicked
                    continueRoutine = False
                if not st_cont_btn.wasClicked:
                    # run callback code when st_cont_btn is clicked
                    pass
        # take note of whether st_cont_btn was clicked, so that next frame we know if clicks are new
        st_cont_btn.wasClicked = st_cont_btn.isClicked and st_cont_btn.status == STARTED
        
        # *st_sound* updates
        
        # if st_sound is stopping this frame...
        if st_sound.status == STARTED:
            if bool(False) or st_sound.isFinished:
                # keep track of stop time/frame for later
                st_sound.tStop = t  # not accounting for scr refresh
                st_sound.tStopRefresh = tThisFlipGlobal  # on global time
                st_sound.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'st_sound.stopped')
                # update status
                st_sound.status = FINISHED
                st_sound.stop()
        # Run 'Each Frame' code from code
        if st_play_btn.wasClicked and not st_soundPlaying:
            st_sound.play()
            st_soundPlaying = True
            st_playStart = t
        
        if st_soundPlaying:
            if t - st_playStart >= st_sound.getDuration():
                st_soundPlaying = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[st_sound]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            sound_test.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in sound_test.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "sound_test" ---
    for thisComponent in sound_test.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for sound_test
    sound_test.tStop = globalClock.getTime(format='float')
    sound_test.tStopRefresh = tThisFlipGlobal
    thisExp.addData('sound_test.stopped', sound_test.tStop)
    thisExp.addData('st_play_btn.numClicks', st_play_btn.numClicks)
    if st_play_btn.numClicks:
       thisExp.addData('st_play_btn.timesOn', st_play_btn.timesOn)
       thisExp.addData('st_play_btn.timesOff', st_play_btn.timesOff)
    else:
       thisExp.addData('st_play_btn.timesOn', "")
       thisExp.addData('st_play_btn.timesOff', "")
    thisExp.addData('st_cont_btn.numClicks', st_cont_btn.numClicks)
    if st_cont_btn.numClicks:
       thisExp.addData('st_cont_btn.timesOn', st_cont_btn.timesOn)
       thisExp.addData('st_cont_btn.timesOff', st_cont_btn.timesOff)
    else:
       thisExp.addData('st_cont_btn.timesOn', "")
       thisExp.addData('st_cont_btn.timesOff', "")
    st_sound.pause()  # ensure sound has stopped at end of Routine
    thisExp.nextEntry()
    # the Routine "sound_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler2(
        name='trials',
        nReps=1.0, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('conditions/vm_cond_file.csv'), 
        seed=None, 
    )
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            globals()[paramName] = thisTrial[paramName]
    
    for thisTrial in trials:
        currentLoop = trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        
        # --- Prepare to start Routine "voice_memorisation" ---
        # create an object to store info about Routine voice_memorisation
        voice_memorisation = data.Routine(
            name='voice_memorisation',
            components=[vm_text, vm_btn, vm_sound_1, vm_sound_2, vm_sound_3, vm_sound_4, vm_sound_5, vm_sound_6, vm_sound_7, vm_sound_8],
        )
        voice_memorisation.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_2
        vm_text.text = vm_text_content
        vm_btn.text = vm_btn_content
        
        if auto_proceed == 1:
            vm_text.draw()
            win.flip()
            continueRoutine = False
        
        if vm_playSound == 1:
            for _ in range(3):
                vm_sound_1.play()
                core.wait(vm_sound_1.getDuration() + 0.1)
            for _ in range(3):
                vm_sound_2.play()
                core.wait(vm_sound_1.getDuration() + 0.1)
            for _ in range(3):
                vm_sound_3.play()
                core.wait(vm_sound_1.getDuration() + 0.1)
            for _ in range(3):
                vm_sound_4.play()
                core.wait(vm_sound_1.getDuration() + 0.1)
            for _ in range(3):
                vm_sound_5.play()
                core.wait(vm_sound_1.getDuration() + 0.1)
            for _ in range(3):
                vm_sound_6.play()
                core.wait(vm_sound_1.getDuration() + 0.1)
            for _ in range(3):
                vm_sound_7.play()
                core.wait(vm_sound_1.getDuration() + 0.1)
            for _ in range(3):
                vm_sound_8.play()
                core.wait(vm_sound_1.getDuration() + 0.1)  
            continueRoutine = False
        # reset vm_btn to account for continued clicks & clear times on/off
        vm_btn.reset()
        vm_sound_1.setSound('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID01.wav', hamming=True)
        vm_sound_1.setVolume(1.0, log=False)
        vm_sound_1.seek(0)
        vm_sound_2.setSound('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID02.wav', hamming=True)
        vm_sound_2.setVolume(1.0, log=False)
        vm_sound_2.seek(0)
        vm_sound_3.setSound('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID03.wav', hamming=True)
        vm_sound_3.setVolume(1.0, log=False)
        vm_sound_3.seek(0)
        vm_sound_4.setSound('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID04.wav', hamming=True)
        vm_sound_4.setVolume(1.0, log=False)
        vm_sound_4.seek(0)
        vm_sound_5.setSound('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID05.wav', hamming=True)
        vm_sound_5.setVolume(1.0, log=False)
        vm_sound_5.seek(0)
        vm_sound_6.setSound('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID06.wav', hamming=True)
        vm_sound_6.setVolume(1.0, log=False)
        vm_sound_6.seek(0)
        vm_sound_7.setSound('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID07.wav', hamming=True)
        vm_sound_7.setVolume(1.0, log=False)
        vm_sound_7.seek(0)
        vm_sound_8.setSound('Sounds_Resampled-44100Hz_Normalized-100-percent-window_Adjusted-66150/Voice_Old_ID08.wav', hamming=True)
        vm_sound_8.setVolume(1.0, log=False)
        vm_sound_8.seek(0)
        # store start times for voice_memorisation
        voice_memorisation.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        voice_memorisation.tStart = globalClock.getTime(format='float')
        voice_memorisation.status = STARTED
        thisExp.addData('voice_memorisation.started', voice_memorisation.tStart)
        voice_memorisation.maxDuration = None
        # keep track of which components have finished
        voice_memorisationComponents = voice_memorisation.components
        for thisComponent in voice_memorisation.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "voice_memorisation" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        voice_memorisation.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *vm_text* updates
            
            # if vm_text is starting this frame...
            if vm_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                vm_text.frameNStart = frameN  # exact frame index
                vm_text.tStart = t  # local t and not account for scr refresh
                vm_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(vm_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'vm_text.started')
                # update status
                vm_text.status = STARTED
                vm_text.setAutoDraw(True)
            
            # if vm_text is active this frame...
            if vm_text.status == STARTED:
                # update params
                pass
            # *vm_btn* updates
            
            # if vm_btn is starting this frame...
            if vm_btn.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                vm_btn.frameNStart = frameN  # exact frame index
                vm_btn.tStart = t  # local t and not account for scr refresh
                vm_btn.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(vm_btn, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'vm_btn.started')
                # update status
                vm_btn.status = STARTED
                win.callOnFlip(vm_btn.buttonClock.reset)
                vm_btn.setAutoDraw(True)
            
            # if vm_btn is active this frame...
            if vm_btn.status == STARTED:
                # update params
                pass
                # check whether vm_btn has been pressed
                if vm_btn.isClicked:
                    if not vm_btn.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        vm_btn.timesOn.append(vm_btn.buttonClock.getTime())
                        vm_btn.timesOff.append(vm_btn.buttonClock.getTime())
                    elif len(vm_btn.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        vm_btn.timesOff[-1] = vm_btn.buttonClock.getTime()
                    if not vm_btn.wasClicked:
                        # end routine when vm_btn is clicked
                        continueRoutine = False
                    if not vm_btn.wasClicked:
                        # run callback code when vm_btn is clicked
                        pass
            # take note of whether vm_btn was clicked, so that next frame we know if clicks are new
            vm_btn.wasClicked = vm_btn.isClicked and vm_btn.status == STARTED
            
            # *vm_sound_1* updates
            
            # if vm_sound_1 is stopping this frame...
            if vm_sound_1.status == STARTED:
                if bool(False) or vm_sound_1.isFinished:
                    # keep track of stop time/frame for later
                    vm_sound_1.tStop = t  # not accounting for scr refresh
                    vm_sound_1.tStopRefresh = tThisFlipGlobal  # on global time
                    vm_sound_1.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'vm_sound_1.stopped')
                    # update status
                    vm_sound_1.status = FINISHED
                    vm_sound_1.stop()
            
            # *vm_sound_2* updates
            
            # if vm_sound_2 is stopping this frame...
            if vm_sound_2.status == STARTED:
                if bool(False) or vm_sound_2.isFinished:
                    # keep track of stop time/frame for later
                    vm_sound_2.tStop = t  # not accounting for scr refresh
                    vm_sound_2.tStopRefresh = tThisFlipGlobal  # on global time
                    vm_sound_2.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'vm_sound_2.stopped')
                    # update status
                    vm_sound_2.status = FINISHED
                    vm_sound_2.stop()
            
            # *vm_sound_3* updates
            
            # if vm_sound_3 is stopping this frame...
            if vm_sound_3.status == STARTED:
                if bool(False) or vm_sound_3.isFinished:
                    # keep track of stop time/frame for later
                    vm_sound_3.tStop = t  # not accounting for scr refresh
                    vm_sound_3.tStopRefresh = tThisFlipGlobal  # on global time
                    vm_sound_3.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'vm_sound_3.stopped')
                    # update status
                    vm_sound_3.status = FINISHED
                    vm_sound_3.stop()
            
            # *vm_sound_4* updates
            
            # if vm_sound_4 is stopping this frame...
            if vm_sound_4.status == STARTED:
                if bool(False) or vm_sound_4.isFinished:
                    # keep track of stop time/frame for later
                    vm_sound_4.tStop = t  # not accounting for scr refresh
                    vm_sound_4.tStopRefresh = tThisFlipGlobal  # on global time
                    vm_sound_4.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'vm_sound_4.stopped')
                    # update status
                    vm_sound_4.status = FINISHED
                    vm_sound_4.stop()
            
            # *vm_sound_5* updates
            
            # if vm_sound_5 is stopping this frame...
            if vm_sound_5.status == STARTED:
                if bool(False) or vm_sound_5.isFinished:
                    # keep track of stop time/frame for later
                    vm_sound_5.tStop = t  # not accounting for scr refresh
                    vm_sound_5.tStopRefresh = tThisFlipGlobal  # on global time
                    vm_sound_5.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'vm_sound_5.stopped')
                    # update status
                    vm_sound_5.status = FINISHED
                    vm_sound_5.stop()
            
            # *vm_sound_6* updates
            
            # if vm_sound_6 is stopping this frame...
            if vm_sound_6.status == STARTED:
                if bool(False) or vm_sound_6.isFinished:
                    # keep track of stop time/frame for later
                    vm_sound_6.tStop = t  # not accounting for scr refresh
                    vm_sound_6.tStopRefresh = tThisFlipGlobal  # on global time
                    vm_sound_6.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'vm_sound_6.stopped')
                    # update status
                    vm_sound_6.status = FINISHED
                    vm_sound_6.stop()
            
            # *vm_sound_7* updates
            
            # if vm_sound_7 is stopping this frame...
            if vm_sound_7.status == STARTED:
                if bool(False) or vm_sound_7.isFinished:
                    # keep track of stop time/frame for later
                    vm_sound_7.tStop = t  # not accounting for scr refresh
                    vm_sound_7.tStopRefresh = tThisFlipGlobal  # on global time
                    vm_sound_7.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'vm_sound_7.stopped')
                    # update status
                    vm_sound_7.status = FINISHED
                    vm_sound_7.stop()
            
            # *vm_sound_8* updates
            
            # if vm_sound_8 is stopping this frame...
            if vm_sound_8.status == STARTED:
                if bool(False) or vm_sound_8.isFinished:
                    # keep track of stop time/frame for later
                    vm_sound_8.tStop = t  # not accounting for scr refresh
                    vm_sound_8.tStopRefresh = tThisFlipGlobal  # on global time
                    vm_sound_8.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'vm_sound_8.stopped')
                    # update status
                    vm_sound_8.status = FINISHED
                    vm_sound_8.stop()
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[vm_sound_1, vm_sound_2, vm_sound_3, vm_sound_4, vm_sound_5, vm_sound_6, vm_sound_7, vm_sound_8]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                voice_memorisation.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in voice_memorisation.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "voice_memorisation" ---
        for thisComponent in voice_memorisation.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for voice_memorisation
        voice_memorisation.tStop = globalClock.getTime(format='float')
        voice_memorisation.tStopRefresh = tThisFlipGlobal
        thisExp.addData('voice_memorisation.stopped', voice_memorisation.tStop)
        trials.addData('vm_btn.numClicks', vm_btn.numClicks)
        if vm_btn.numClicks:
           trials.addData('vm_btn.timesOn', vm_btn.timesOn)
           trials.addData('vm_btn.timesOff', vm_btn.timesOff)
        else:
           trials.addData('vm_btn.timesOn', "")
           trials.addData('vm_btn.timesOff', "")
        vm_sound_1.pause()  # ensure sound has stopped at end of Routine
        vm_sound_2.pause()  # ensure sound has stopped at end of Routine
        vm_sound_3.pause()  # ensure sound has stopped at end of Routine
        vm_sound_4.pause()  # ensure sound has stopped at end of Routine
        vm_sound_5.pause()  # ensure sound has stopped at end of Routine
        vm_sound_6.pause()  # ensure sound has stopped at end of Routine
        vm_sound_7.pause()  # ensure sound has stopped at end of Routine
        vm_sound_8.pause()  # ensure sound has stopped at end of Routine
        # the Routine "voice_memorisation" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
    # completed 1.0 repeats of 'trials'
    
    
    # --- Prepare to start Routine "voice_task_intro" ---
    # create an object to store info about Routine voice_task_intro
    voice_task_intro = data.Routine(
        name='voice_task_intro',
        components=[vti_text, vti_btn],
    )
    voice_task_intro.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset vti_btn to account for continued clicks & clear times on/off
    vti_btn.reset()
    # store start times for voice_task_intro
    voice_task_intro.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    voice_task_intro.tStart = globalClock.getTime(format='float')
    voice_task_intro.status = STARTED
    thisExp.addData('voice_task_intro.started', voice_task_intro.tStart)
    voice_task_intro.maxDuration = None
    # keep track of which components have finished
    voice_task_introComponents = voice_task_intro.components
    for thisComponent in voice_task_intro.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "voice_task_intro" ---
    voice_task_intro.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *vti_text* updates
        
        # if vti_text is starting this frame...
        if vti_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            vti_text.frameNStart = frameN  # exact frame index
            vti_text.tStart = t  # local t and not account for scr refresh
            vti_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(vti_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'vti_text.started')
            # update status
            vti_text.status = STARTED
            vti_text.setAutoDraw(True)
        
        # if vti_text is active this frame...
        if vti_text.status == STARTED:
            # update params
            pass
        # *vti_btn* updates
        
        # if vti_btn is starting this frame...
        if vti_btn.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            vti_btn.frameNStart = frameN  # exact frame index
            vti_btn.tStart = t  # local t and not account for scr refresh
            vti_btn.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(vti_btn, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'vti_btn.started')
            # update status
            vti_btn.status = STARTED
            win.callOnFlip(vti_btn.buttonClock.reset)
            vti_btn.setAutoDraw(True)
        
        # if vti_btn is active this frame...
        if vti_btn.status == STARTED:
            # update params
            pass
            # check whether vti_btn has been pressed
            if vti_btn.isClicked:
                if not vti_btn.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    vti_btn.timesOn.append(vti_btn.buttonClock.getTime())
                    vti_btn.timesOff.append(vti_btn.buttonClock.getTime())
                elif len(vti_btn.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    vti_btn.timesOff[-1] = vti_btn.buttonClock.getTime()
                if not vti_btn.wasClicked:
                    # end routine when vti_btn is clicked
                    continueRoutine = False
                if not vti_btn.wasClicked:
                    # run callback code when vti_btn is clicked
                    pass
        # take note of whether vti_btn was clicked, so that next frame we know if clicks are new
        vti_btn.wasClicked = vti_btn.isClicked and vti_btn.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            voice_task_intro.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in voice_task_intro.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "voice_task_intro" ---
    for thisComponent in voice_task_intro.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for voice_task_intro
    voice_task_intro.tStop = globalClock.getTime(format='float')
    voice_task_intro.tStopRefresh = tThisFlipGlobal
    thisExp.addData('voice_task_intro.stopped', voice_task_intro.tStop)
    thisExp.addData('vti_btn.numClicks', vti_btn.numClicks)
    if vti_btn.numClicks:
       thisExp.addData('vti_btn.timesOn', vti_btn.timesOn)
       thisExp.addData('vti_btn.timesOff', vti_btn.timesOff)
    else:
       thisExp.addData('vti_btn.timesOn', "")
       thisExp.addData('vti_btn.timesOff', "")
    thisExp.nextEntry()
    # the Routine "voice_task_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials_2 = data.TrialHandler2(
        name='trials_2',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('conditions/vt_cond_file.csv'), 
        seed=None, 
    )
    thisExp.addLoop(trials_2)  # add the loop to the experiment
    thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            globals()[paramName] = thisTrial_2[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisTrial_2 in trials_2:
        currentLoop = trials_2
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
        if thisTrial_2 != None:
            for paramName in thisTrial_2:
                globals()[paramName] = thisTrial_2[paramName]
        
        # --- Prepare to start Routine "voice_task_load" ---
        # create an object to store info about Routine voice_task_load
        voice_task_load = data.Routine(
            name='voice_task_load',
            components=[vtl_text],
        )
        voice_task_load.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for voice_task_load
        voice_task_load.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        voice_task_load.tStart = globalClock.getTime(format='float')
        voice_task_load.status = STARTED
        thisExp.addData('voice_task_load.started', voice_task_load.tStart)
        voice_task_load.maxDuration = None
        # keep track of which components have finished
        voice_task_loadComponents = voice_task_load.components
        for thisComponent in voice_task_load.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "voice_task_load" ---
        # if trial has changed, end Routine now
        if isinstance(trials_2, data.TrialHandler2) and thisTrial_2.thisN != trials_2.thisTrial.thisN:
            continueRoutine = False
        voice_task_load.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.5:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *vtl_text* updates
            
            # if vtl_text is starting this frame...
            if vtl_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                vtl_text.frameNStart = frameN  # exact frame index
                vtl_text.tStart = t  # local t and not account for scr refresh
                vtl_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(vtl_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'vtl_text.started')
                # update status
                vtl_text.status = STARTED
                vtl_text.setAutoDraw(True)
            
            # if vtl_text is active this frame...
            if vtl_text.status == STARTED:
                # update params
                pass
            
            # if vtl_text is stopping this frame...
            if vtl_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > vtl_text.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    vtl_text.tStop = t  # not accounting for scr refresh
                    vtl_text.tStopRefresh = tThisFlipGlobal  # on global time
                    vtl_text.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'vtl_text.stopped')
                    # update status
                    vtl_text.status = FINISHED
                    vtl_text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                voice_task_load.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in voice_task_load.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "voice_task_load" ---
        for thisComponent in voice_task_load.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for voice_task_load
        voice_task_load.tStop = globalClock.getTime(format='float')
        voice_task_load.tStopRefresh = tThisFlipGlobal
        thisExp.addData('voice_task_load.stopped', voice_task_load.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if voice_task_load.maxDurationReached:
            routineTimer.addTime(-voice_task_load.maxDuration)
        elif voice_task_load.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        
        # --- Prepare to start Routine "voice_task" ---
        # create an object to store info about Routine voice_task
        voice_task = data.Routine(
            name='voice_task',
            components=[vt_text, vt_sound, vt_key],
        )
        voice_task.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_3
        respKey = None
        respCorrect = None
        
        vt_sound.setSound(vt_soundfile, hamming=True)
        vt_sound.setVolume(1.0, log=False)
        vt_sound.seek(0)
        # create starting attributes for vt_key
        vt_key.keys = []
        vt_key.rt = []
        _vt_key_allKeys = []
        # store start times for voice_task
        voice_task.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        voice_task.tStart = globalClock.getTime(format='float')
        voice_task.status = STARTED
        thisExp.addData('voice_task.started', voice_task.tStart)
        voice_task.maxDuration = None
        # keep track of which components have finished
        voice_taskComponents = voice_task.components
        for thisComponent in voice_task.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "voice_task" ---
        # if trial has changed, end Routine now
        if isinstance(trials_2, data.TrialHandler2) and thisTrial_2.thisN != trials_2.thisTrial.thisN:
            continueRoutine = False
        voice_task.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *vt_text* updates
            
            # if vt_text is starting this frame...
            if vt_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                vt_text.frameNStart = frameN  # exact frame index
                vt_text.tStart = t  # local t and not account for scr refresh
                vt_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(vt_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'vt_text.started')
                # update status
                vt_text.status = STARTED
                vt_text.setAutoDraw(True)
            
            # if vt_text is active this frame...
            if vt_text.status == STARTED:
                # update params
                pass
            
            # *vt_sound* updates
            
            # if vt_sound is starting this frame...
            if vt_sound.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                # keep track of start time/frame for later
                vt_sound.frameNStart = frameN  # exact frame index
                vt_sound.tStart = t  # local t and not account for scr refresh
                vt_sound.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('vt_sound.started', tThisFlipGlobal)
                # update status
                vt_sound.status = STARTED
                vt_sound.play(when=win)  # sync with win flip
            
            # if vt_sound is stopping this frame...
            if vt_sound.status == STARTED:
                if bool(False) or vt_sound.isFinished:
                    # keep track of stop time/frame for later
                    vt_sound.tStop = t  # not accounting for scr refresh
                    vt_sound.tStopRefresh = tThisFlipGlobal  # on global time
                    vt_sound.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'vt_sound.stopped')
                    # update status
                    vt_sound.status = FINISHED
                    vt_sound.stop()
            
            # *vt_key* updates
            waitOnFlip = False
            
            # if vt_key is starting this frame...
            if vt_key.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                # keep track of start time/frame for later
                vt_key.frameNStart = frameN  # exact frame index
                vt_key.tStart = t  # local t and not account for scr refresh
                vt_key.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(vt_key, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'vt_key.started')
                # update status
                vt_key.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(vt_key.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(vt_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if vt_key.status == STARTED and not waitOnFlip:
                theseKeys = vt_key.getKeys(keyList=['z', 'm'], ignoreKeys=["escape"], waitRelease=True)
                _vt_key_allKeys.extend(theseKeys)
                if len(_vt_key_allKeys):
                    vt_key.keys = _vt_key_allKeys[-1].name  # just the last key pressed
                    vt_key.rt = _vt_key_allKeys[-1].rt
                    vt_key.duration = _vt_key_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[vt_sound]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                voice_task.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in voice_task.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "voice_task" ---
        for thisComponent in voice_task.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for voice_task
        voice_task.tStop = globalClock.getTime(format='float')
        voice_task.tStopRefresh = tThisFlipGlobal
        thisExp.addData('voice_task.stopped', voice_task.tStop)
        # Run 'End Routine' code from code_3
        # Check response from Keyboard component
        if vt_key.keys:  # participant pressed a key
            respKey = vt_key.keys[0]  # first key pressed
            print(respKey)
            if (respKey == 'z' and vti_type == 'old') or (respKey == 'm' and vti_type == 'new'):
                respCorrect = 1
            else:
                respCorrect = 0
            print(respCorrect)
        
        # Update counters
        totalTrials += 1
        if respCorrect == 1:
            totalCorrect += 1
        vt_sound.pause()  # ensure sound has stopped at end of Routine
        # check responses
        if vt_key.keys in ['', [], None]:  # No response was made
            vt_key.keys = None
        trials_2.addData('vt_key.keys',vt_key.keys)
        if vt_key.keys != None:  # we had a response
            trials_2.addData('vt_key.rt', vt_key.rt)
            trials_2.addData('vt_key.duration', vt_key.duration)
        # the Routine "voice_task" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'trials_2'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "voice_feedback" ---
    # create an object to store info about Routine voice_feedback
    voice_feedback = data.Routine(
        name='voice_feedback',
        components=[vf_text, vf_btn],
    )
    voice_feedback.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_4
    
    accuracy_percent = (totalCorrect / totalTrials) * 100
    vf_text.text = f"Your accuracy for the faces was {accuracy_percent:.1f}%\nAs an indication, the general population accuracy for this type of sound is 78.8 %\n\nClick 'Next' to continue"
    # reset vf_btn to account for continued clicks & clear times on/off
    vf_btn.reset()
    # store start times for voice_feedback
    voice_feedback.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    voice_feedback.tStart = globalClock.getTime(format='float')
    voice_feedback.status = STARTED
    thisExp.addData('voice_feedback.started', voice_feedback.tStart)
    voice_feedback.maxDuration = None
    # keep track of which components have finished
    voice_feedbackComponents = voice_feedback.components
    for thisComponent in voice_feedback.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "voice_feedback" ---
    voice_feedback.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *vf_text* updates
        
        # if vf_text is starting this frame...
        if vf_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            vf_text.frameNStart = frameN  # exact frame index
            vf_text.tStart = t  # local t and not account for scr refresh
            vf_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(vf_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'vf_text.started')
            # update status
            vf_text.status = STARTED
            vf_text.setAutoDraw(True)
        
        # if vf_text is active this frame...
        if vf_text.status == STARTED:
            # update params
            pass
        # *vf_btn* updates
        
        # if vf_btn is starting this frame...
        if vf_btn.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            vf_btn.frameNStart = frameN  # exact frame index
            vf_btn.tStart = t  # local t and not account for scr refresh
            vf_btn.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(vf_btn, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'vf_btn.started')
            # update status
            vf_btn.status = STARTED
            win.callOnFlip(vf_btn.buttonClock.reset)
            vf_btn.setAutoDraw(True)
        
        # if vf_btn is active this frame...
        if vf_btn.status == STARTED:
            # update params
            pass
            # check whether vf_btn has been pressed
            if vf_btn.isClicked:
                if not vf_btn.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    vf_btn.timesOn.append(vf_btn.buttonClock.getTime())
                    vf_btn.timesOff.append(vf_btn.buttonClock.getTime())
                elif len(vf_btn.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    vf_btn.timesOff[-1] = vf_btn.buttonClock.getTime()
                if not vf_btn.wasClicked:
                    # end routine when vf_btn is clicked
                    continueRoutine = False
                if not vf_btn.wasClicked:
                    # run callback code when vf_btn is clicked
                    pass
        # take note of whether vf_btn was clicked, so that next frame we know if clicks are new
        vf_btn.wasClicked = vf_btn.isClicked and vf_btn.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            voice_feedback.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in voice_feedback.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "voice_feedback" ---
    for thisComponent in voice_feedback.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for voice_feedback
    voice_feedback.tStop = globalClock.getTime(format='float')
    voice_feedback.tStopRefresh = tThisFlipGlobal
    thisExp.addData('voice_feedback.stopped', voice_feedback.tStop)
    thisExp.addData('vf_btn.numClicks', vf_btn.numClicks)
    if vf_btn.numClicks:
       thisExp.addData('vf_btn.timesOn', vf_btn.timesOn)
       thisExp.addData('vf_btn.timesOff', vf_btn.timesOff)
    else:
       thisExp.addData('vf_btn.timesOn', "")
       thisExp.addData('vf_btn.timesOff', "")
    thisExp.nextEntry()
    # the Routine "voice_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "bells_instructions" ---
    # create an object to store info about Routine bells_instructions
    bells_instructions = data.Routine(
        name='bells_instructions',
        components=[],
    )
    bells_instructions.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for bells_instructions
    bells_instructions.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    bells_instructions.tStart = globalClock.getTime(format='float')
    bells_instructions.status = STARTED
    thisExp.addData('bells_instructions.started', bells_instructions.tStart)
    bells_instructions.maxDuration = None
    # keep track of which components have finished
    bells_instructionsComponents = bells_instructions.components
    for thisComponent in bells_instructions.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "bells_instructions" ---
    bells_instructions.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            bells_instructions.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in bells_instructions.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "bells_instructions" ---
    for thisComponent in bells_instructions.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for bells_instructions
    bells_instructions.tStop = globalClock.getTime(format='float')
    bells_instructions.tStopRefresh = tThisFlipGlobal
    thisExp.addData('bells_instructions.stopped', bells_instructions.tStop)
    thisExp.nextEntry()
    # the Routine "bells_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "bells_memorisation" ---
    # create an object to store info about Routine bells_memorisation
    bells_memorisation = data.Routine(
        name='bells_memorisation',
        components=[],
    )
    bells_memorisation.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for bells_memorisation
    bells_memorisation.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    bells_memorisation.tStart = globalClock.getTime(format='float')
    bells_memorisation.status = STARTED
    thisExp.addData('bells_memorisation.started', bells_memorisation.tStart)
    bells_memorisation.maxDuration = None
    # keep track of which components have finished
    bells_memorisationComponents = bells_memorisation.components
    for thisComponent in bells_memorisation.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "bells_memorisation" ---
    bells_memorisation.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            bells_memorisation.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in bells_memorisation.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "bells_memorisation" ---
    for thisComponent in bells_memorisation.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for bells_memorisation
    bells_memorisation.tStop = globalClock.getTime(format='float')
    bells_memorisation.tStopRefresh = tThisFlipGlobal
    thisExp.addData('bells_memorisation.stopped', bells_memorisation.tStop)
    thisExp.nextEntry()
    # the Routine "bells_memorisation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "bells_task" ---
    # create an object to store info about Routine bells_task
    bells_task = data.Routine(
        name='bells_task',
        components=[],
    )
    bells_task.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for bells_task
    bells_task.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    bells_task.tStart = globalClock.getTime(format='float')
    bells_task.status = STARTED
    thisExp.addData('bells_task.started', bells_task.tStart)
    bells_task.maxDuration = None
    # keep track of which components have finished
    bells_taskComponents = bells_task.components
    for thisComponent in bells_task.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "bells_task" ---
    bells_task.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            bells_task.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in bells_task.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "bells_task" ---
    for thisComponent in bells_task.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for bells_task
    bells_task.tStop = globalClock.getTime(format='float')
    bells_task.tStopRefresh = tThisFlipGlobal
    thisExp.addData('bells_task.stopped', bells_task.tStop)
    thisExp.nextEntry()
    # the Routine "bells_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "bells_feedback" ---
    # create an object to store info about Routine bells_feedback
    bells_feedback = data.Routine(
        name='bells_feedback',
        components=[],
    )
    bells_feedback.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for bells_feedback
    bells_feedback.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    bells_feedback.tStart = globalClock.getTime(format='float')
    bells_feedback.status = STARTED
    thisExp.addData('bells_feedback.started', bells_feedback.tStart)
    bells_feedback.maxDuration = None
    # keep track of which components have finished
    bells_feedbackComponents = bells_feedback.components
    for thisComponent in bells_feedback.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "bells_feedback" ---
    bells_feedback.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            bells_feedback.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in bells_feedback.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "bells_feedback" ---
    for thisComponent in bells_feedback.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for bells_feedback
    bells_feedback.tStop = globalClock.getTime(format='float')
    bells_feedback.tStopRefresh = tThisFlipGlobal
    thisExp.addData('bells_feedback.stopped', bells_feedback.tStop)
    thisExp.nextEntry()
    # the Routine "bells_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "finish" ---
    # create an object to store info about Routine finish
    finish = data.Routine(
        name='finish',
        components=[],
    )
    finish.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for finish
    finish.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    finish.tStart = globalClock.getTime(format='float')
    finish.status = STARTED
    thisExp.addData('finish.started', finish.tStart)
    finish.maxDuration = None
    # keep track of which components have finished
    finishComponents = finish.components
    for thisComponent in finish.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "finish" ---
    finish.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            finish.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in finish.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "finish" ---
    for thisComponent in finish.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for finish
    finish.tStop = globalClock.getTime(format='float')
    finish.tStopRefresh = tThisFlipGlobal
    thisExp.addData('finish.stopped', finish.tStop)
    thisExp.nextEntry()
    # the Routine "finish" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
