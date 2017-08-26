# Jupyter Notebook Extension

> fast.ai课程中notebook样式配置。
>
> Jupyter Notebook 安装 3.x `pip install jupyter`, 2.x `pip install ipython==5.4 jupyter`

1. [Collapse Headings](http://jupyter-contrib-nbextensions.readthedocs.io/en/latest/index.html)

   - ```shell
     # 安装程序包
     pip install jupyter_contrib_nbextensions
     ```

   - ```shell
     # 下载css和js
     jupyter contrib nbextension install --user
     ```

   - ```shell
     # 开启 collapsible heading
     jupyter nbextensions enable collapsible_headings/main
     ```



2. [Themes](https://github.com/dunovank/jupyter-themes)

   - ```shell
     # 安装Python包
     pip install jupyterthemes
     ```

   - ```shell
     jt -h # 帮助
     jt -l # 列出theme
     jt -t xxx # 选择theme
     ```

     ​