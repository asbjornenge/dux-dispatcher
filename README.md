# Dux Dispatcher 

>Part of the ref. implementation of the [Dux](https://github.com/asbjornenge/dux) architecture.

A Dispatcher for [Dux](https://github.com/asbjornenge/dux).  

This Dispatcher uses [Faye](http://faye.jcoglan.com/) to distribute messages. 

## RUN

    docker run -d asbjornenge/dux-dispatcher
        --port <number>  // Port number for faye (default 8000)

enjoy
