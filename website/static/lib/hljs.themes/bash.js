hljs.registerLanguage("bash", function(e) {
    var t = {
            cN: "variable",
            v: [{
                b: /\$[\w\d#@][\w\d_]*/
            }, {
                b: /\$\{(.*?)}/
            }]
        },
        s = {
            cN: "string",
            b: /"/,
            e: /"/,
            c: [e.BE, t, {
                cN: "variable",
                b: /\$\(/,
                e: /\)/,
                c: [e.BE]
            }]
        },
        a = {
            cN: "string",
            b: /'/,
            e: /'/
        };
    return {
        aliases: ["sh", "zsh"],
        l: /-?[a-zA-Z0-9\.\(\)\!\\;\{\}_+-]+/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function"
                    + " -true"
                    + " -false"
                    + " -Bmin"
                    + " -Bnewer"
                    + " -Btime"
                    + " -atime"
                    + " -acl"
                    + " -amin"
                    + " -anewer"
                    + " -cmin"
                    + " -cnewer"
                    + " -ctime"
                    + " -d"
                    + " -depth"
                    + " -depth"
                    + " -empty"
                    + " -executable"
                    + " -fstype"
                    + " -gid"
                    + " -group"
                    + " -ignore_readdir_race"
                    + " -ilname"
                    + " -ilname"
                    + " -iname"
                    + " -inum"
                    + " -ipath"
                    + " -iregex"
                    + " -iwholename"
                    + " -links"
                    + " -lname"
                    + " -ls"
                    + " -maxdepth"
                    + " -mindepth"
                    + " -mmin"
                    + " -mnewer"
                    + " -mount"
                    + " -mtime"
                    + " -name"
                    + " -newer"
                    + " -newerXY"
                    + " -nogroup"
                    + " -noignore_readdir_race"
                    + " -noleaf"
                    + " -nouser"
                    + " -path"
                    + " -perm"
                    + " -print"
                    + " -regex"
                    + " -samefile"
                    + " -size"
                    + " -type"
                    + " -uid"
                    + " -user"
                    + " -wholename"
                    + " -xattr"
                    + " -xattrname"
                    + " -xi"
                    + " -daystart"
                    + " -xtype"
                    + " -a"
                    + " -b"
                    + " -c"
                    + " -d"
                    + " -e"
                    + " -f"
                    + " -g"
                    + " -h"
                    + " -i"
                    + " -j"
                    + " -k"
                    + " -l"
                    + " -m"
                    + " -n"
                    + " -o"
                    + " -p"
                    + " -q"
                    + " -r"
                    + " -s"
                    + " -t"
                    + " -u"
                    + " -v"
                    + " -w"
                    + " -x"
                    + " -y"
                    + " -z"
                    + " -A"
                    + " -B"
                    + " -C"
                    + " -D"
                    + " -E"
                    + " -F"
                    + " -G"
                    + " -H"
                    + " -I"
                    + " -J"
                    + " -K"
                    + " -L"
                    + " -M"
                    + " -N"
                    + " -O"
                    + " -P"
                    + " -Q"
                    + " -R"
                    + " -S"
                    + " -T"
                    + " -U"
                    + " -V"
                    + " -W"
                    + " -X"
                    + " -Y"
                    + " -Z"
                    + " -1"
                    + " -2"
                    + " -3"
                    + " -4"
                    + " -5"
                    + " -6"
                    + " -7"
                    + " -8"
                    + " -9"
                    + " -0",
            literal: "true false",
            built_in: "break cd continue eval exec exit export find getopts grep hash pwd readonly"
                    + " return shift test times trap umask unset alias bind builtin caller command"
                    + " declare echo enable help let local logout mapfile printf read readarray"
                    + " source type typeset ulimit unalias set shopt autoload bg bindkey bye cap"
                    + " chdir clone comparguments compcall compctl compdescribe compfiles compgroups"
                    + " compquote comptags comptry compvalues dirs disable disown echotc echoti"
                    + " emulate fc fg float functions getcap getln history integer jobs kill limit"
                    + " log noglob popd print pushd pushln rehash sched setcap setopt stat suspend"
                    + " ttyctl unfunction unhash unlimit unsetopt vared wait whence where which"
                    + " zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket"
                    + " zstyle ztcp rm sort head tail tar cp smv ls chmod chown chgrp wc xargs",
            operators: "\! \\\! -not -and -or",
            actions: "-detele -exec -execdir -fls -fprint -fprint0 -fprintf -ls -ok -okdir -print"
                    + " -print0 -printf -prune -quit",
            special_symbols: "\\\( \\\) \\; \+",
            semantic_types: "File-01 File-02 File-03 File-04 File-05 File-06"
                    + " Directory-01 Directory-02 Directory-03 Directory-04 Directory-05 Directory-06"
                    + " Path-01 Path-02 Path-03 Path-04 Path-05 Path-06"
                    + " Number-01 Number-02 Number-03 Number-04 Number-05 Number-06"
                    + " Size-01 Size-02 Size-03 Size-04 Size-05 Size-06"
                    + " Timespan-01 Timespan-02 Timespan-03 Timespan-04 Timespan-05 Timespan-06"
                    + " Regex-01 Regex-02 Regex-03 Regex-04 Regex-05 Regex-06"
                    + " DateTime-01 DateTime-02 DateTime-03 DateTime-04 DateTime-05 DateTime-06"
                    + " Permission-01 Permission-02 Permission-03 Permission-04 Permission-05 Permission-06"
                    + " Username-01 Username-02 Username-03 Username-04 Username-05 Username-06"
                    + " Groupname-01 Groupname-02 Groupname-03 Groupname-04 Groupname-05 Groupname-06"
                    + " File Directory Path Number Size Timespan Regex DateTime Type Option"
                    + " Permission Username Groupname Prog"
        },
        c: [{
            cN: "meta",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        }, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [e.inherit(e.TM, {
                b: /\w[\w\d_]*/
            })],
            r: 0
        }, e.HCM, s, a, t]
    }
});
